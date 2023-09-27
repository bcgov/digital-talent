import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GraphQLString } from 'graphql';
import { Comment, FindManyCommentArgs } from '../../../@generated/prisma-nestjs-graphql';
import { CurrentUser } from '../../auth/decorators/current-user.decorator';
import { CreateCommentCommand } from '../commands/create-comment/create-comment.command';
import { DeleteCommentCommand } from '../commands/delete-comment/delete-comment.command';
import { UpdateCommentCommand } from '../commands/update-comment/update-comment.command';
import { CreateCommentInput } from '../inputs/create-comment.input';
import { UpdateCommentInput } from '../inputs/update-comment.input';
import { GetCommentQuery } from '../queries/get-comment/get-comment.query';
import { GetCommentsQuery } from '../queries/get-comments/get-comments.query';

@Resolver((of) => Comment)
export class CommentResolver {
  constructor(private readonly commandBus: CommandBus, private readonly queryBus: QueryBus) {}

  @Mutation((returns) => GraphQLString)
  async createComment(
    @CurrentUser() { id: userId }: Express.User,
    @Args({ name: 'data', type: () => CreateCommentInput }) data: CreateCommentInput,
  ) {
    const { id, ...restData } = data;
    const command = new CreateCommentCommand({ id, user_id: userId, ...restData }, { created_by: userId });
    await this.commandBus.execute(command);

    return command.data.id;
  }

  @Mutation((returns) => GraphQLString)
  async updateComment(
    @CurrentUser() { id: userId }: Express.User,
    @Args({ name: 'data', type: () => UpdateCommentInput }) data: UpdateCommentInput,
  ) {
    const command = new UpdateCommentCommand(data, { created_by: userId });
    await this.commandBus.execute(command);

    return command.data.id;
  }

  @Mutation((returns) => GraphQLString)
  async deleteComment(
    @CurrentUser() { id: userId }: Express.User,
    @Args({ name: 'id', type: () => String }) id: string,
  ) {
    const command = new DeleteCommentCommand({ id }, { created_by: userId });
    await this.commandBus.execute(command);

    return command.data.id;
  }

  @Query((returns) => [Comment])
  async comments(@Args() args?: FindManyCommentArgs) {
    return this.queryBus.execute(new GetCommentsQuery(args));
  }

  @Query((returns) => Comment)
  async comment(@Args('id', { type: () => GraphQLString }) id: string) {
    return this.queryBus.execute(new GetCommentQuery(id));
  }
}
