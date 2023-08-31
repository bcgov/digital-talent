import { QueryBus } from '@nestjs/cqrs';
import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { ClassificationModel } from '../../classification/models/classification.model';
import { GetClassificationQuery } from '../../classification/queries/get-classification/get-classification.query';
import { JobDescriptionModel } from '../models/job-description.model';
import { GetJobDescriptionQuery } from '../queries/get-job-description/get-job-description.query';
import { GetJobDescriptionsQuery } from '../queries/get-job-descriptions/get-job-descriptions.query';

@Resolver((of) => JobDescriptionModel)
export class JobDescriptionResolver {
  constructor(private readonly queryBus: QueryBus) {}

  @Query((returns) => [JobDescriptionModel])
  async jobDescriptions() {
    const result = await this.queryBus.execute(new GetJobDescriptionsQuery());
    return result;
  }

  @Query((returns) => JobDescriptionModel)
  async jobDescription(@Args('id', { type: () => String }) id: string) {
    const result = await this.queryBus.execute(new GetJobDescriptionQuery(id));
    return result;
  }

  @ResolveField('classification', (returns) => ClassificationModel)
  async getClassification(@Parent() jobDescription: JobDescriptionModel) {
    return this.queryBus.execute(new GetClassificationQuery(jobDescription.classification_id));
  }
}
