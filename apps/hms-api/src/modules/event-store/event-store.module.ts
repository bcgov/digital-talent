import { EventStoreDBClient } from '@eventstore/db-client';
import { FactoryProvider, Global, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppConfigDto } from '../../dtos/app-config.dto';

const EventStoreClient: FactoryProvider<EventStoreDBClient> = {
  provide: EventStoreDBClient,
  useFactory: (configService: ConfigService<AppConfigDto, true>) =>
    EventStoreDBClient.connectionString(configService.get('EVENT_STORE_URL')),
  inject: [ConfigService],
};

@Global()
@Module({
  providers: [EventStoreClient],
  exports: [EventStoreClient],
})
export class EventStoreModule {}
