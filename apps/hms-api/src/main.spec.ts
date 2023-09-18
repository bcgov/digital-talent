import { EventStoreDBClient } from '@eventstore/db-client';
import { NestFactory } from '@nestjs/core';
import { CommandBus } from '@nestjs/cqrs';
import { Logger } from 'nestjs-pino';
import { AppModule } from './app.module';
import { applySeeds } from './seeds';
import { bootstrap } from './main';

jest.mock('@nestjs/core');
jest.mock('nestjs-pino');
jest.mock('./app.module'); // Assuming it exports a class
jest.mock('./seeds');

const commandBusMock = {};
const eventStoreMock = {};

jest.mock('./utils/validate-app-config.util', () => ({
  validateAppConfig: jest.fn().mockImplementation((config) => config),
}));

jest.mock('@nestjs/core', () => ({
  NestFactory: {
    create: jest.fn().mockResolvedValue({
      enableCors: jest.fn(),
      useLogger: jest.fn(),
      useGlobalPipes: jest.fn(),
      listen: jest.fn(),
      get: jest.fn(),
    }),
  },
}));

jest.mock('@nestjs/common', () => {
  const originalModule = jest.requireActual('@nestjs/common');
  return {
    ...originalModule,
    ValidationPipe: jest.fn().mockImplementation(() => {
      return {
        // Mock necessary methods here, or just leave it empty if not needed
      };
    }),
  };
});

describe('bootstrap', () => {
  let appMock;

  beforeEach(() => {
    appMock = {
      enableCors: jest.fn(),
      useLogger: jest.fn(),
      useGlobalPipes: jest.fn(),
      listen: jest.fn(),
      get: jest.fn().mockImplementation((type) => {
        if (type === CommandBus) return commandBusMock;
        if (type === EventStoreDBClient) return eventStoreMock;
        return null;
      }),
    };
    (NestFactory.create as jest.Mock).mockResolvedValue(appMock);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create the app with correct parameters', async () => {
    await bootstrap();

    expect(NestFactory.create).toHaveBeenCalledWith(AppModule, { bufferLogs: true });
  });

  it('should enable CORS', async () => {
    await bootstrap();

    expect(appMock.enableCors).toHaveBeenCalled();
  });

  it('should set the logger', async () => {
    const loggerMock = {};
    appMock.get.mockReturnValueOnce(loggerMock);

    await bootstrap();

    expect(appMock.useLogger).toHaveBeenCalledWith(loggerMock);
    expect(appMock.get).toHaveBeenCalledWith(Logger);
  });

  it('should set global pipes', async () => {
    await bootstrap();

    // eslint-disable-next-line global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires
    const ValidationPipeMock = require('@nestjs/common').ValidationPipe;
    expect(ValidationPipeMock).toHaveBeenCalledWith({
      skipMissingProperties: false,
      transform: true,
      whitelist: true,
    });
  });

  it('should start listening on port 4000', async () => {
    await bootstrap();

    expect(appMock.listen).toHaveBeenCalledWith(4000);
  });

  it('should retrieve dependencies and apply seeds', async () => {
    appMock.get.mockReturnValueOnce(commandBusMock).mockReturnValueOnce(eventStoreMock);

    await bootstrap();

    expect(appMock.get).toHaveBeenCalledWith(CommandBus);
    expect(appMock.get).toHaveBeenCalledWith(EventStoreDBClient);
    expect(applySeeds).toHaveBeenCalledWith(commandBusMock, eventStoreMock);
  });
});
