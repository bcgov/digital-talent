import { CacheModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AuthGuard } from './auth/guards/auth.guard';
import { RoleGuard } from './auth/guards/role.guard';
import { CandidateModule } from './candidate/candidate.module';
import { PicklistModule } from './picklist/picklist.module';
import { PrismaService } from './services/prisma/prisma.service';
import { validate } from './validation/environment.validation';

@Module({
  imports: [
    CacheModule.register({ isGlobal: true }),
    ConfigModule.forRoot({ isGlobal: true, validate }),
    AuthModule,
    CandidateModule,
    PicklistModule,
  ],
  controllers: [AppController],
  providers: [
    { provide: APP_GUARD, useClass: AuthGuard },
    { provide: APP_GUARD, useClass: RoleGuard },
    AppService,
    PrismaService,
  ],
})
export class AppModule {}
