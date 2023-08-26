import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { PrismaModule } from '../prisma/prisma.module';
import { AuthService } from './auth.service';
import { CommandHandlers } from './commands';
import { EventHandlers } from './events';
import { KeycloakStrategy } from './strategies/keycloak.strategy';

@Module({
  imports: [CqrsModule, HttpModule, PrismaModule],
  providers: [AuthService, KeycloakStrategy, ...CommandHandlers, ...EventHandlers],
  exports: [AuthService],
})
export class AuthModule {}
