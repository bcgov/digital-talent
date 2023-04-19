import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { PrismaService } from '../services/prisma/prisma.service';
import { AuthService } from './auth.service';
import { KeycloakStrategy } from './strategies/keycloak.strategy';

@Module({
  imports: [HttpModule],
  providers: [AuthService, KeycloakStrategy, PrismaService],
  exports: [AuthService],
})
export class AuthModule {}
