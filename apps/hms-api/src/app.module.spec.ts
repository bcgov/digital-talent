import { APP_GUARD } from '@nestjs/core';
import { MiddlewareConsumer } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from '@nestjs/config';
import { ApolloDriver } from '@nestjs/apollo';
import { LoggerModule } from 'nestjs-pino';
import { AppModule } from './app.module';
import { AuthGuard } from './modules/auth/guards/auth.guard';
import { RoleGuard } from './modules/auth/guards/role.guard';
import { RequestIdMiddleware } from './middleware/request-id.middleware';
import { validateAppConfig } from './utils/validate-app-config.util';

jest.mock('./utils/validate-app-config.util', () => ({
  validateAppConfig: jest.fn().mockImplementation(() => true),
}));

jest.mock('@nestjs/config', () => {
  const originalModule = jest.requireActual('@nestjs/config');
  return {
    ...originalModule,
    ConfigModule: {
      ...originalModule.ConfigModule,
      forRoot: jest.fn(),
    },
  };
});

jest.mock('@nestjs/cache-manager', () => {
  const originalModule = jest.requireActual('@nestjs/cache-manager');
  return {
    ...originalModule,
    CacheModule: {
      ...originalModule.CacheModule,
      register: jest.fn(),
    },
  };
});

jest.mock('@nestjs/graphql', () => ({
  ...jest.requireActual('@nestjs/graphql'), // This line ensures you keep the rest of the package's real implementations
  GraphQLModule: {
    forRoot: jest.fn(), // Here, we're mocking only the 'forRoot' method
  },
}));

describe('AppModule', () => {
  // beforeEach(() => {
  //   jest.clearAllMocks();
  // });

  afterAll(() => {
    jest.clearAllMocks();
  });

  it('should provide the RoleGuard', () => {
    const providers = Reflect.getMetadata('providers', AppModule);
    const hasRoleGuard = providers.some((provider) => {
      if (provider.provide === APP_GUARD) {
        return provider.useClass === RoleGuard;
      }
      return false;
    });
    expect(hasRoleGuard).toBeTruthy();
  });

  it('should provide the AuthGuard', () => {
    const providers = Reflect.getMetadata('providers', AppModule);
    const hasAuthGuard = providers.some((provider) => {
      if (provider.provide === APP_GUARD) {
        return provider.useClass === AuthGuard;
      }
      return false;
    });
    expect(hasAuthGuard).toBeTruthy();
  });

  describe('Middlewares', () => {
    it('should apply the RequestIdMiddleware', () => {
      const applyMock = jest.fn();

      // Mock the consumer object and its apply method
      const mockConsumer: Partial<MiddlewareConsumer> = {
        apply: (...middlewares: any[]) => {
          applyMock(...middlewares);
          return {
            forRoutes: jest.fn(), // Assuming you'd use this function next in the chain
          } as any;
        },
      };

      // Instantiate your AppModule
      const appModule = new AppModule();

      // Call configure to apply middlewares
      appModule.configure(mockConsumer as MiddlewareConsumer);

      // Check if the apply method of our mockConsumer was called with the right middleware
      expect(applyMock).toBeCalledWith(RequestIdMiddleware);
    });
  });

  it('should register CacheModule with global scope', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const imports = Reflect.getMetadata('imports', AppModule);
    // Ensure the AppModule has been imported or initialized in your test environment
    // so that CacheModule.register gets called.

    // Retrieve the mocked register method
    const registerMock = CacheModule.register as jest.Mock;

    // Expect it to have been called
    expect(registerMock).toHaveBeenCalled();

    // Verify the arguments of the first call
    const firstCallArgs = registerMock.mock.calls[0][0];
    expect(firstCallArgs).toEqual({ isGlobal: true });
  });

  describe('GraphQLModule Configuration', () => {
    it('should configure the GraphQLModule correctly', () => {
      // Extracting the mock
      const forRootMock = GraphQLModule.forRoot as jest.MockedFunction<typeof GraphQLModule.forRoot>;

      // Expect it to have been called
      expect(forRootMock).toHaveBeenCalled();

      const firstCallArgs = forRootMock.mock.calls[0][0];
      expect(firstCallArgs.driver).toEqual(ApolloDriver);
      expect(firstCallArgs.autoSchemaFile).toBe(true);
      expect(typeof firstCallArgs.context).toBe('function');
    });
  });

  describe('ConfigModule Configuration', () => {
    it('should configure the ConfigModule with global scope and validation function', () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const imports = Reflect.getMetadata('imports', AppModule);
      // Retrieve the mocked forRoot method
      const forRootMock = ConfigModule.forRoot as jest.Mock;

      // Expect it to have been called
      expect(forRootMock).toHaveBeenCalled();

      // Verify the arguments of the first call
      const firstCallArgs = forRootMock.mock.calls[0][0];
      expect(firstCallArgs.isGlobal).toBe(true);
      expect(firstCallArgs.validate).toBe(validateAppConfig);
    });
  });

  let loggerModuleConfig;

  beforeAll(() => {
    // Fetch LoggerModule's dynamic configuration from AppModule's metadata
    const imports = Reflect.getMetadata('imports', AppModule);
    loggerModuleConfig = imports.find((importedModuleDescriptor) => {
      return importedModuleDescriptor && importedModuleDescriptor.module === LoggerModule;
    });

    // Ensure loggerModuleConfig is defined. If it's not, all subsequent tests will fail.
    if (!loggerModuleConfig) {
      throw new Error("LoggerModule configuration not found in AppModule's metadata.");
    }
  });

  it('should configure the LoggerModule with correct pinoHttp settings for production', async () => {
    const imports = Reflect.getMetadata('imports', AppModule);

    const loggerModuleConfig = imports.find(
      (importedModuleDescriptor) => importedModuleDescriptor && importedModuleDescriptor.module === LoggerModule,
    );

    expect(loggerModuleConfig).toBeDefined();

    // Extract the correct provider configuration from the loggerModuleConfig
    const pinoParamsProvider = loggerModuleConfig.providers.find((provider) => provider.provide === 'pino-params');

    expect(pinoParamsProvider).toBeDefined();
    expect(typeof pinoParamsProvider.useFactory).toBe('function');

    const mockConfigService = {
      get: jest.fn().mockReturnValue('production'),
    };

    const pinoHttpConfig = await pinoParamsProvider.useFactory(mockConfigService);

    expect(pinoHttpConfig.pinoHttp.level).toBe('info');
    expect(pinoHttpConfig.pinoHttp.transport).toBeUndefined();
  });

  it('should configure the LoggerModule with correct pinoHttp settings for non-production', async () => {
    const imports = Reflect.getMetadata('imports', AppModule);

    const loggerModuleConfig = imports.find(
      (importedModuleDescriptor) => importedModuleDescriptor && importedModuleDescriptor.module === LoggerModule,
    );

    const pinoParamsProvider = loggerModuleConfig.providers.find((provider) => provider.provide === 'pino-params');

    const mockConfigService = {
      get: jest.fn().mockReturnValue('development'),
    };

    const pinoHttpConfig = await pinoParamsProvider.useFactory(mockConfigService);

    expect(pinoHttpConfig.pinoHttp.level).toBe('debug');
    expect(pinoHttpConfig.pinoHttp.transport).toEqual({ target: 'pino-pretty' });
  });
});
