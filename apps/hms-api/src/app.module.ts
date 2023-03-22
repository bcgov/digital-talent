import { CacheModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { validate } from './validation/environment.validation';

@Module({
  imports: [CacheModule.register({ isGlobal: true }), ConfigModule.forRoot({ isGlobal: true, validate }), AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
