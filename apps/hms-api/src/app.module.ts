import { CacheModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AuthGuard } from './auth/guards/auth.guard';
import { validate } from './validation/environment.validation';

@Module({
  imports: [CacheModule.register({ isGlobal: true }), ConfigModule.forRoot({ isGlobal: true, validate }), AuthModule],
  controllers: [AppController],
  providers: [{ provide: APP_GUARD, useClass: AuthGuard }, AppService],
})
export class AppModule {}
