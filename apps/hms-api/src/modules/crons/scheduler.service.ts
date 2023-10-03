import { error } from 'console';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { Cron, CronExpression } from '@nestjs/schedule';
import { CompetitionState } from '@prisma/client';
import { catchError, firstValueFrom, map } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { CompetitionResolver } from '../competition/competition/resolvers/competition.resolver';
import { CreateOpportunityInput } from '../opportunity/opportunity/inputs/create-opportunity.input';
import { OpportunityResolver } from '../opportunity/opportunity/opportunity.resolver';
import { SyncUserCommand } from '../user/commands/sync-user/sync-user.command';
import { UserResolver } from '../user/resolvers/user.resolver';

@Injectable()
export class SchedulerService {
  constructor(
    // Replace the LocationService with your own service
    // private readonly locationService: LocationService,
    private readonly httpService: HttpService,
    private readonly resolver: CompetitionResolver,
    private readonly opportunityResolver: OpportunityResolver,
    private readonly userResolver: UserResolver,
    private readonly commandBus: CommandBus,
  ) {}

  // This Job is called every 5th minute.
  @Cron(CronExpression.EVERY_30_SECONDS)
  async chefsSyncJob() {
    function getValueFromPath(obj: any, path: string) {
      return path.split('.').reduce((acc, part) => acc && acc[part], obj);
    }

    const mapToCreateOpportunityInput = async (
      apiResponseItem: any,
      competition_id: string,
      fieldMap,
    ): Promise<CreateOpportunityInput> => {
      const coi: CreateOpportunityInput = Object.keys(fieldMap).reduce((acc, key) => {
        acc[key] = getValueFromPath(apiResponseItem, fieldMap[key]);
        return acc;
      }, {} as CreateOpportunityInput);
      // console.log(competition_id);
      coi.deltek_id = competition_id;
      coi.competition_id = competition_id;
      // coi.hiring_manager_id = '4f2b48d4-f33e-45a9-a34c-b5cd2bbc6381';
      // console.log(apiResponseItem.submission.data.Email);
      const hiringManagers: any[] = await this.userResolver.lookupHiringManager(apiResponseItem.submission.data.Email);
      if (hiringManagers.length > 1) {
        throw error('multiple hiring managers with the same email');
      }
      const hiringManager = hiringManagers[0];
      if (hiringManager !== undefined) {
        // console.log(hiringManager);
        coi.hiring_manager_id = hiringManager.id;
      } else {
        const uuid = uuidv4();
        const command = new SyncUserCommand(
          {
            id: uuid,
            email: apiResponseItem.submission.data.Email,
            name: apiResponseItem.submission.data.Name,
            roles: ['hiring-manager'],
          },
          { created_by: '3d0949b0-edef-4ac0-a8b1-2ac3c9527dfd' },
        );
        coi.hiring_manager_id = await this.commandBus.execute(command);
        coi.hiring_manager_id = uuid;
      }
      // coi.ministry_id = 'a583cf18-885f-4b7a-b3f0-d755063f28dd';

      // temporary for testing - id should come from chefs
      // coi.id = uuidv4();
      // console.log(coi);
      return coi;
    };
    async function mapApiResponse(apiResponse: any[], competition_id, fieldMap): Promise<CreateOpportunityInput[]> {
      return Promise.all(
        apiResponse
          .filter((item) => !oppIDs.includes(item.submission.data.id))
          .map((item) => mapToCreateOpportunityInput(item, competition_id, fieldMap)),
      );
    }

    const openCompetitions: any = await this.resolver.competitions(CompetitionState.INTAKE_PERIOD);
    const compIDs: any[] = openCompetitions.map((c) => {
      return c.id;
    });

    const existingOpportunities: any = (await this.opportunityResolver.opportunities()).filter((o) => {
      return compIDs.includes(o.competition_id);
    });
    const oppIDs: any[] = existingOpportunities.map((c) => {
      return c.id;
    });
    // console.log('comps');
    // console.log(compIDs);

    // console.log('opps');
    // console.log(oppIDs);
    openCompetitions.forEach(async (competition) => {
      const metadata = competition.metadata.chefs.intake;
      const fieldMap = metadata.field_map;
      const formID = metadata.form_id;
      const formVersionID = metadata.form_version_id;
      const formAPIKey = metadata.form_api_key;
      // console.log(formID);
      // console.log(formAPIKey);
      // console.log(formVersionID);
      // console.log(fieldMap);
      const url = `https://submit.digital.gov.bc.ca/app/api/v1/forms/${formID}/versions/${formVersionID}/submissions`;

      const compID = competition.id;
      const response: CreateOpportunityInput[] = await firstValueFrom(
        this.httpService
          .get(url, {
            auth: {
              username: formID,
              password: formAPIKey,
            },
          })
          .pipe(map((r) => r.data))
          .pipe(
            catchError((err) => {
              throw new Error(err);
            }),
          ),
      );
      const parsedData = await mapApiResponse(response, compID, fieldMap);

      // console.log(parsedData);
      parsedData.forEach(async (submission) => {
        // console.log(`Create new opportunity: ${submission.id}`);
        // console.log(submission);
        await this.opportunityResolver.createOpportunity(
          { id: '3d0949b0-edef-4ac0-a8b1-2ac3c9527dfd' } as any,
          submission,
        );
        // const result = await this.opportunityResolver
        //   .createOpportunity({ id: '3d0949b0-edef-4ac0-a8b1-2ac3c9527dfd' } as any, submission)
        //   .then((result) => {
        //      console.log(`opportunity created: ${result}`);
        //   })
        //   .catch((error) => {
        //      console.log(error);
        //   });
        //  console.log(`submitted: ${result}`);
      });
    });
  }
}
