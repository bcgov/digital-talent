import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { PrismaModule } from '../prisma/prisma.module';
import { AuthService } from './auth.service';
import { CommandHandlers } from './commands';
import { EventHandlers } from './events';
import { KeycloakStrategy } from './strategies/keycloak.strategy';
import { AuthController } from './auth.controller';

@Module({
  imports: [CqrsModule, HttpModule, PrismaModule],
  providers: [AuthService, KeycloakStrategy, ...CommandHandlers, ...EventHandlers],
  exports: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
