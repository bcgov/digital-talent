import { QueryBus } from '@nestjs/cqrs';
import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Classification, JobDescription } from '../../../@generated/prisma-nestjs-graphql';
import { GetClassificationQuery } from '../../classification/queries/get-classification/get-classification.query';
import { GetJobDescriptionQuery } from '../queries/get-job-description/get-job-description.query';
import { GetJobDescriptionsQuery } from '../queries/get-job-descriptions/get-job-descriptions.query';

@Resolver((of) => JobDescription)
export class JobDescriptionResolver {
  constructor(private readonly queryBus: QueryBus) {}

  @Query((returns) => [JobDescription])
  async jobDescriptions() {
    const result = await this.queryBus.execute(new GetJobDescriptionsQuery());
    return result;
  }

  @Query((returns) => JobDescription)
  async jobDescription(@Args('id', { type: () => String }) id: string) {
    const result = await this.queryBus.execute(new GetJobDescriptionQuery(id));
    return result;
  }

  @ResolveField('classification', (returns) => Classification)
  async getClassification(@Parent() jobDescription: JobDescription) {
    return this.queryBus.execute(new GetClassificationQuery(jobDescription.classification_id));
  }
}
