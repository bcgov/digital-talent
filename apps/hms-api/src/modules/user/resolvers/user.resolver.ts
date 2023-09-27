import { QueryBus } from '@nestjs/cqrs';
import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { GraphQLUUID } from 'graphql-scalars';
import {
  Application,
  Comment,
  Competition,
  Elist,
  FindManyUserArgs,
  Identity,
  Opportunity,
  User,
} from '../../../@generated/prisma-nestjs-graphql';
import { GetApplicationsQuery } from '../../application/application/queries/get-applications/get-applications.query';
import { Roles } from '../../auth/decorators/roles.decorator';
import { GetCommentsQuery } from '../../comment/queries/get-comments/get-comments.query';
import { GetCompetitionsQuery } from '../../competition/competition/queries/get-competitions/get-competitions.query';
import { GetElistsQuery } from '../../elist/elist/queries/get-elists/get-elists.query';
import { GetIdentitiesQuery } from '../../identity/queries/get-identities/get-identities.query';
import { GetOpportunitiesQuery } from '../../opportunity/opportunity/queries/get-opportunities/get-opportunities.query';
import { GetUserQuery } from '../queries/get-user/get-user.query';
import { GetUsersQuery } from '../queries/get-users/get-users.query';

@Resolver((of) => User)
export class UserResolver {
  constructor(private readonly queryBus: QueryBus) {}

  @Roles('admin', 'recruiter')
  @Query((returns) => [User], { name: 'users' })
  getUsers(@Args() args?: FindManyUserArgs) {
    return this.queryBus.execute(new GetUsersQuery(args));
  }

  @Roles('admin', 'recruiter')
  @Query((returns) => [User], { name: 'hiringManagers' })
  getHiringManagers(@Args() args?: FindManyUserArgs) {
    return this.queryBus.execute(
      new GetUsersQuery({ ...args, ...{ where: { roles: { hasEvery: ['hiring-manager'] } } } }),
    );
  }

  @Roles('admin', 'recruiter')
  @Query((returns) => [User], { name: 'recruiters' })
  getRecruiters(@Args() args?: FindManyUserArgs) {
    return this.queryBus.execute(new GetUsersQuery({ ...args, ...{ where: { roles: { hasEvery: ['recruiter'] } } } }));
  }

  @Query((returns) => User, { name: 'user' })
  getUser(@Args({ name: 'id', type: () => GraphQLUUID }) id: string) {
    return this.queryBus.execute(new GetUserQuery(id));
  }

  @ResolveField('applications', (returns) => [Application])
  applications(@Parent() user: User) {
    return this.queryBus.execute(new GetApplicationsQuery({ where: { applicant_id: { equals: user.id } } }));
  }

  @ResolveField('comments', (returns) => [Comment])
  comments(@Parent() user: User) {
    return this.queryBus.execute(new GetCommentsQuery({ where: { user_id: { equals: user.id } } }));
  }

  @ResolveField('competitions', (returns) => [Competition])
  competitions(@Parent() user: User) {
    return this.queryBus.execute(new GetCompetitionsQuery({ where: { recruiter_id: { equals: user.id } } }));
  }

  @ResolveField('elist', (returns) => [Elist])
  elists(@Parent() user: User) {
    return this.queryBus.execute(new GetElistsQuery({ where: { applicant_id: { equals: user.id } } }));
  }

  @ResolveField('identities', (returns) => [Identity])
  identities(@Parent() user: User) {
    return this.queryBus.execute(new GetIdentitiesQuery({ where: { user_id: { equals: user.id } } }));
  }

  @ResolveField('opportunities', (returns) => [Opportunity])
  opportunities(@Parent() user: User) {
    return this.queryBus.execute(new GetOpportunitiesQuery({ where: { hiring_manager_id: { equals: user.id } } }));
  }
}
