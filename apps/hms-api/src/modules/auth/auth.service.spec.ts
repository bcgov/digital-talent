import { Test, TestingModule } from '@nestjs/testing';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { CommandBus } from '@nestjs/cqrs';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { Observable, of } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { JwtPayload } from 'jsonwebtoken';
import { PrismaService } from '../prisma/prisma.service';
import { AuthService } from './auth.service';
import { KEYCLOAK_PUBLIC_KEY } from './auth.constants';

jest.mock('uuid');

describe('AuthService', () => {
  let service: AuthService;
  let mockCacheManager: any;
  let mockHttpService: any;
  let mockConfigService: any;
  let mockCommandBus: any;
  let mockPrismaService: any;

  beforeEach(async () => {
    mockCacheManager = {
      get: jest.fn(),
      set: jest.fn(),
    };
    mockHttpService = {
      get: jest.fn(),
    };
    mockConfigService = {
      get: jest.fn(),
    };
    mockCommandBus = {
      execute: jest.fn(),
    };
    mockPrismaService = {
      identity: {
        findUnique: jest.fn(),
      },
      user: {
        findUnique: jest.fn(),
      },
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: CACHE_MANAGER, useValue: mockCacheManager },
        { provide: HttpService, useValue: mockHttpService },
        { provide: ConfigService, useValue: mockConfigService },
        { provide: CommandBus, useValue: mockCommandBus },
        { provide: PrismaService, useValue: mockPrismaService },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getKeycloakPublicKey', () => {
    it('should set the public key in the cache after fetching', async () => {
      mockCacheManager.get.mockResolvedValueOnce(null);
      mockConfigService.get.mockReturnValueOnce('someUrl');
      mockHttpService.get.mockReturnValueOnce(of({ data: { public_key: 'fetchedKey' } }));
      await service.getKeycloakPublicKey();
      expect(mockCacheManager.set).toHaveBeenCalledWith(KEYCLOAK_PUBLIC_KEY, expect.any(String), expect.any(Number));
    });
    it('should return public key from cache if available', async () => {
      mockCacheManager.get.mockResolvedValueOnce('somePublicKey');
      const result = await service.getKeycloakPublicKey();
      expect(result).toBe('somePublicKey');
    });
    it('should fetch public key from KEYCLOAK_REALM_URL if not in cache', async () => {
      mockCacheManager.get
        .mockResolvedValueOnce(null) // first call will be null
        .mockResolvedValueOnce(`-----BEGIN PUBLIC KEY-----\nfetchedKey\n-----END PUBLIC KEY-----`); // on second call we wrote to cache, so now it returns a value
      mockConfigService.get.mockReturnValueOnce('someUrl');
      mockHttpService.get.mockReturnValueOnce(of({ data: { public_key: 'fetchedKey' } })); // "of" because http service get function returns an observable
      const result = await service.getKeycloakPublicKey();
      expect(result).toBe(`-----BEGIN PUBLIC KEY-----\nfetchedKey\n-----END PUBLIC KEY-----`);
    });
  });
  describe('getExpectedKeyCloakClientId', () => {
    it('should return the expected KEYCLOAK_CLIENT_IDs', () => {
      mockConfigService.get.mockReturnValueOnce('someClientId').mockReturnValueOnce('someClientId2');
      const result = service.getExpectedKeyCloakClientIds();
      expect(result).toEqual(['someClientId', 'someClientId2']);
    });
    it('should throw an error if fetching public key from KEYCLOAK_REALM_URL fails', async () => {
      mockCacheManager.get.mockResolvedValueOnce(null);
      mockConfigService.get.mockReturnValueOnce('someUrl');
      mockHttpService.get.mockReturnValueOnce(
        new Observable((observer) => {
          observer.error(new Error('Some error occurred'));
        }),
      );
      await expect(service.getKeycloakPublicKey()).rejects.toThrowError('Some error occurred');
    });
  });

  describe('getUserFromPayload', () => {
    const samplePayload: JwtPayload = {
      sub: 'someSub',
      identity_provider: 'someProvider',
      name: 'John Doe',
      email: 'john.doe@example.com',
      client_roles: ['role1', 'role2'],
      exp: 12345678,
    };

    it('should return an existing identity if found in db', async () => {
      const existingIdentity = {
        user_id: 'existingUserId',
      };
      const expectedUser = {
        id: existingIdentity.user_id,
        name: samplePayload.name,
        email: samplePayload.email,
        roles: samplePayload.client_roles?.sort(),
      };

      mockCacheManager.get.mockResolvedValueOnce(null).mockResolvedValueOnce(expectedUser);
      mockPrismaService.identity.findUnique.mockResolvedValueOnce(existingIdentity); // user was found in identity table

      const result = await service.getUserFromPayload(samplePayload);

      expect(result.id).toBe(existingIdentity.user_id);
      expect(result.name).toBe(samplePayload.name);
      expect(result.email).toBe(samplePayload.email);
      expect(result.roles).toEqual(samplePayload.client_roles?.sort());
    });

    it('should handle prisma errors gracefully', async () => {
      mockPrismaService.identity.findUnique.mockRejectedValueOnce(new Error('Prisma error'));

      await expect(service.getUserFromPayload(samplePayload)).rejects.toThrowError('Prisma error');
    });

    it('should handle cache service errors gracefully', async () => {
      mockCacheManager.get.mockRejectedValueOnce(new Error('Cache error'));

      await expect(service.getUserFromPayload(samplePayload)).rejects.toThrowError('Cache error');
    });

    it('should handle errors during user syncing', async () => {
      const newUserId = 'newUuid';

      mockCacheManager.get.mockResolvedValueOnce(null);
      mockPrismaService.identity.findUnique.mockResolvedValueOnce(null);
      mockPrismaService.user.findUnique.mockResolvedValueOnce(null);
      mockCommandBus.execute.mockRejectedValueOnce(new Error('Failed to sync user'));
      (uuidv4 as jest.Mock).mockReturnValueOnce(newUserId);

      await expect(service.getUserFromPayload(samplePayload)).rejects.toThrowError('Failed to sync user');
    });

    it('should return user from cache if available', async () => {
      const cachedUser: Express.User = {
        id: 'someId',
        name: 'cachedName',
        email: 'cachedEmail@example.com',
        roles: ['cachedRole1', 'cachedRole2'],
      };

      mockCacheManager.get.mockResolvedValueOnce(cachedUser);
      const result = await service.getUserFromPayload(samplePayload);
      expect(result).toBe(cachedUser);
    });

    it('should sync and return a new user if not found in cache and db', async () => {
      const newUserId = 'newUuid';

      mockCacheManager.get.mockResolvedValueOnce(null).mockResolvedValueOnce({
        // Second check after setting the user in the cache
        id: newUserId,
        name: samplePayload.name,
        email: samplePayload.email,
        roles: samplePayload.client_roles?.sort(),
      });
      mockPrismaService.identity.findUnique.mockResolvedValueOnce(null); // user was not in identity table
      mockPrismaService.user.findUnique.mockResolvedValueOnce(null); // user is not in user table
      mockCommandBus.execute.mockResolvedValueOnce(undefined); // commandbus runs the sync command
      (uuidv4 as jest.Mock).mockReturnValueOnce(newUserId); // we generate brand new user id

      const result = await service.getUserFromPayload(samplePayload);

      expect(result.id).toBe(newUserId);
      expect(result.name).toBe(samplePayload.name);
      expect(result.email).toBe(samplePayload.email);
      expect(result.roles).toEqual(samplePayload.client_roles?.sort());

      expect(mockCommandBus.execute).toBeCalled(); // Ensure that the SyncAccountCommand was dispatched
    });

    it('should return an existing user if not found in cache but found in db using email', async () => {
      const existingUser = {
        id: 'existingUserId',
        email: 'existingUserEmail',
        name: 'existingUserName',
      };

      mockCacheManager.get.mockResolvedValueOnce(null).mockResolvedValueOnce({
        // Second check after setting the user in the cache
        id: existingUser.id,
        name: existingUser.name,
        email: existingUser.email,
        roles: samplePayload.client_roles?.sort(),
      });
      mockPrismaService.identity.findUnique.mockResolvedValueOnce(null); // user was not in identity table
      mockPrismaService.user.findUnique.mockResolvedValueOnce(existingUser); // user was in user table

      const result = await service.getUserFromPayload(samplePayload);

      expect(result.id).toBe(existingUser.id);
      expect(result.name).toBe(existingUser.name);
      expect(result.email).toBe(existingUser.email);
      expect(result.roles).toEqual(samplePayload.client_roles?.sort());
    });
  });
});
