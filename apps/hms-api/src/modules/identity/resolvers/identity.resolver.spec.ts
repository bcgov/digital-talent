import { CreateIdentityCommand } from '../commands/create-identity/create-identity.command';
import { DeleteIdentityCommand } from '../commands/delete-identity/delete-identity.command';
import { DeleteIdentityInput } from '../inputs';
import { CreateIdentityInput } from '../inputs/create-identity.input';
import { IdentityResolver } from './identity.resolver';

describe('IdentityResolver', () => {
  let resolver: IdentityResolver;
  let mockCommandBus: any;
  let mockQueryBus: any;

  beforeEach(() => {
    mockCommandBus = { execute: jest.fn() };
    mockQueryBus = { execute: jest.fn() };

    resolver = new IdentityResolver(mockCommandBus, mockQueryBus);
  });

  it('should create an identity correctly', async () => {
    const input: CreateIdentityInput = {
      user_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      sub: 'test_sub',
      identity_provider: 'test_identity_provider',
    };
    const userId = 'd290f1ee-6c54-4b01-90e6-d701748f0853';

    await resolver.createIdentity({ id: userId } as any, input);

    expect(mockCommandBus.execute).toHaveBeenCalledWith(
      expect.objectContaining({
        ...new CreateIdentityCommand({ ...input }, { created_by: userId }),
      }),
    );
  });

  it('should delete an identity correctly', async () => {
    const userId = 'd290f1ee-6c54-4b01-90e6-d701748f0853';

    await resolver.deleteIdentity({ id: userId } as any, 'test_sub', 'test_identity_provider');

    const input: DeleteIdentityInput = {
      sub: 'test_sub',
      identity_provider: 'test_identity_provider',
    };

    expect(mockCommandBus.execute).toHaveBeenCalledWith(
      expect.objectContaining({
        ...new DeleteIdentityCommand(input, { created_by: userId }),
      }),
    );
  });

  it('should get all identitys correctly', async () => {
    const mockIdentitys = [{ id: '1' }, { id: '2' }];
    mockQueryBus.execute.mockResolvedValueOnce(mockIdentitys);

    const result = await resolver.identities();

    expect(result).toEqual(mockIdentitys);
    expect(mockQueryBus.execute).toHaveBeenCalled();
  });

  it('should get a specific identity by id correctly', async () => {
    const appId = 'mockAppId';
    const mockIdentity = { id: appId };
    mockQueryBus.execute.mockResolvedValueOnce(mockIdentity);

    const result = await resolver.identity('sub', 'id_provider');

    expect(result).toEqual(mockIdentity);
    expect(mockQueryBus.execute).toHaveBeenCalledWith({
      sub: 'sub',
      identity_provider: 'id_provider',
    });
  });
});
