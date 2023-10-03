import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { ScheduleModule } from '@nestjs/schedule';
import { CompetitionModule } from '../competition/competition.module';
import { OpportunityModule } from '../opportunity/opportunity.module';
import { UserModule } from '../user/user.module';
import { SchedulerService } from './scheduler.service';

@Module({
  imports: [ScheduleModule.forRoot(), HttpModule, CompetitionModule, OpportunityModule, UserModule, CqrsModule],
  providers: [SchedulerService],
})
export class SchedulerModule {}
