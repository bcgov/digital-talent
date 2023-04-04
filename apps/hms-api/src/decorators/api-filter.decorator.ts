/* eslint-disable no-console */
import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';

export const ApiFilter = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
  const req: Request = ctx.switchToHttp().getRequest();
  return req.query.filter ?? {};
});
