import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { CommandHandlers } from './commands';
import { EventHandlers } from './events';

@Module({
  imports: [CqrsModule],
  providers: [...CommandHandlers, ...EventHandlers],
})
export class ClassificationModule {}
