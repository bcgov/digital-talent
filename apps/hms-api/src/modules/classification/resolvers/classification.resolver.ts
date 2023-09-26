import { QueryBus } from '@nestjs/cqrs';
import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { GraphQLUUID } from 'graphql-scalars';
import {
  Classification,
  FindManyClassificationArgs,
  Grid,
  JobDescription,
  OccupationGroup,
} from '../../../@generated/prisma-nestjs-graphql';
import { GetGridQuery } from '../../grid/queries/get-grid/get-grid.query';
import { GetJobDescriptionsQuery } from '../../job-description/queries/get-job-descriptions/get-job-descriptions.query';
import { GetOccupationGroupQuery } from '../../occupation-group/queries/get-occupation-group/get-occupation-group.query';
import { GetClassificationQuery } from '../queries/get-classification/get-classification.query';
import { GetClassificationsQuery } from '../queries/get-classifications/get-classifications.query';

@Resolver((of) => Classification)
export class ClassificationResolver {
  constructor(private readonly queryBus: QueryBus) {}

  @Query((returns) => [Classification], { name: 'classifications' })
  getClassifications(@Args() args?: FindManyClassificationArgs) {
    return this.queryBus.execute(new GetClassificationsQuery(args));
  }

  @Query((returns) => Classification, { name: 'classification' })
  getClassification(@Args({ name: 'id', type: () => GraphQLUUID }) id: string) {
    return this.queryBus.execute(new GetClassificationQuery(id));
  }

  @ResolveField('job_descriptions', (returns) => [JobDescription])
  jobDescriptions(@Parent() classification: Classification) {
    return this.queryBus.execute(
      new GetJobDescriptionsQuery({ where: { classification_id: { equals: classification.id } } }),
    );
  }

  @ResolveField('grid', (returns) => Grid)
  grid(@Parent() classification: Classification) {
    return this.queryBus.execute(new GetGridQuery(classification.grid_id));
  }

  @ResolveField('occupation_group', (returns) => OccupationGroup)
  occupationGroup(@Parent() classification: Classification) {
    return this.queryBus.execute(new GetOccupationGroupQuery(classification.occupation_group_id));
  }
}
