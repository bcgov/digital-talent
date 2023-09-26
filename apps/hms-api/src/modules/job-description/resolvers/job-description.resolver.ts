import { QueryBus } from '@nestjs/cqrs';
import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import {
  Classification,
  Competition,
  FindManyJobDescriptionArgs,
  JobDescription,
} from '../../../@generated/prisma-nestjs-graphql';
import { GetClassificationQuery } from '../../classification/queries/get-classification/get-classification.query';
import { GetCompetitionsQuery } from '../../competition/competition/queries/get-competitions/get-competitions.query';
import { GetJobDescriptionQuery } from '../queries/get-job-description/get-job-description.query';
import { GetJobDescriptionsQuery } from '../queries/get-job-descriptions/get-job-descriptions.query';

@Resolver((of) => JobDescription)
export class JobDescriptionResolver {
  constructor(private readonly queryBus: QueryBus) {}

  @Query((returns) => [JobDescription])
  async jobDescriptions(@Args() args?: FindManyJobDescriptionArgs) {
    const result = await this.queryBus.execute(new GetJobDescriptionsQuery(args));
    return result;
  }

  @Query((returns) => JobDescription)
  async jobDescription(@Args('id', { type: () => String }) id: string) {
    const result = await this.queryBus.execute(new GetJobDescriptionQuery(id));
    return result;
  }

  @ResolveField('classification', (returns) => Classification)
  async classification(@Parent() jobDescription: JobDescription) {
    return this.queryBus.execute(new GetClassificationQuery(jobDescription.classification_id));
  }

  @ResolveField('competitions', (returns) => [Competition])
  async competitions(@Parent() jobDescription: JobDescription) {
    return this.queryBus.execute(
      new GetCompetitionsQuery({ where: { job_description_id: { equals: jobDescription.id } } }),
    );
  }
}
