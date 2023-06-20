import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { LoggerModule } from 'nestjs-pino';
import { v4 as uuidv4 } from 'uuid';
import { AppConfigDto } from './dtos/app-config.dto';
import { RequestIdMiddleware } from './middleware/request-id.middleware';
import { validateAppConfig } from './utils/validate-app-config.util';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, validate: validateAppConfig }),
    LoggerModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (config: ConfigService<AppConfigDto, true>) => {
        const NODE_ENV = config.get('NODE_ENV');

        return {
          pinoHttp: {
            genReqId: (req, res) => {
              const existingId = req.id ?? req.headers['x-request-id'];
              if (existingId) return existingId;

              const id = uuidv4();
              res.setHeader('X-Request-Id', id);
              return id;
            },
            level: NODE_ENV !== 'production' ? 'debug' : 'info',
            transport: NODE_ENV !== 'production' ? { target: 'pino-pretty' } : undefined,
          },
        };
      },
    }),
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestIdMiddleware).forRoutes('*');
  }
}
