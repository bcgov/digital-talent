import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { KeycloakStrategy } from './strategies/keycloak.strategy';

@Module({
  imports: [HttpModule],
  providers: [AuthService, KeycloakStrategy],
  exports: [AuthService],
})
export class AuthModule {}
