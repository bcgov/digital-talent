import { BadRequestException } from '@nestjs/common';
import { Identity } from '../../@generated/prisma-nestjs-graphql';
import { ExistsState, InitialState } from '../event-store/types/decider-state.type';
import { Metadata } from '../event-store/types/metadata.type';
import { CreateIdentityCommand } from './commands/create-identity/create-identity.command';
import { DeleteIdentityCommand } from './commands/delete-identity/delete-identity.command';
import { IdentityCreatedEvent } from './events/identity-created/identity-created.event';
import { IdentityDeletedEvent } from './events/identity-deleted/identity-deleted.event';
import { decide, evolve } from './identity.decider';
import { DeleteIdentityInput } from './inputs';
import { CreateIdentityInput } from './inputs/create-identity.input';

type State = InitialState | ExistsState<'identity', Identity>;

describe('identity.decider', () => {
  const mockInitialState: State = { exists: false };
  const mockExistingState: State = {
    exists: true,
    type: 'identity',
    data: {
      created_at: new Date('2023-08-21T12:00:00Z'),
      user_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      sub: 'test_sub',
      identity_provider: 'test_identity_provider',
      updated_at: null,
      deleted_at: null,
    },
  };

  const mockMetadata: Metadata = {
    created_at: '2023-08-21T12:00:00Z',
    created_by: 'test-user-id',
  };

  const mockCreateIdentityInput: CreateIdentityInput = {
    user_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    sub: 'test_sub',
    identity_provider: 'test_identity_provider',
  };

  const mockCreateIdentityCommand = new CreateIdentityCommand(mockCreateIdentityInput, mockMetadata);

  const mockDeleteIdentityInput: DeleteIdentityInput = { sub: 'test_sub', identity_provider: 'test_identity_provider' };

  const mockDeleteIdentityCommand = new DeleteIdentityCommand(mockDeleteIdentityInput, mockMetadata);

  describe('decide function', () => {
    it('throws error if trying to create an existing identity', () => {
      expect(() => {
        decide(mockExistingState, mockCreateIdentityCommand);
      }).toThrow(BadRequestException);
    });

    it('creates an IdentityCreatedEvent correctly', () => {
      const events = decide(mockInitialState, mockCreateIdentityCommand);
      expect(events[0]).toBeInstanceOf(IdentityCreatedEvent);
      expect(events[0].data).toEqual({
        user_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
        sub: 'test_sub',
        identity_provider: 'test_identity_provider',
      });
    });

    it('throws error if trying to delete a non-existing identity', () => {
      expect(() => {
        decide(mockInitialState, mockDeleteIdentityCommand);
      }).toThrow(BadRequestException);
    });

    it('deletes an existing Identity correctly', () => {
      const events = decide(mockExistingState, mockDeleteIdentityCommand);
      expect(events[0]).toBeInstanceOf(IdentityDeletedEvent);
      expect(events[0].data).toEqual({
        sub: 'test_sub',
        identity_provider: 'test_identity_provider',
      });
    });
  });

  describe('evolve function', () => {
    it('evolves state for IdentityCreatedEvent correctly', () => {
      const mockEvent = new IdentityCreatedEvent(
        {
          user_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
          sub: 'test_sub',
          identity_provider: 'test_identity_provider',
        },
        { created_by: 'testUser', created_at: new Date().toISOString() },
      );
      const newState = evolve(mockInitialState, mockEvent);

      expect(newState).toEqual(
        expect.objectContaining({
          exists: true,
          type: 'identity',
          data: expect.objectContaining({
            user_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
            sub: 'test_sub',
            identity_provider: 'test_identity_provider',
            created_at: expect.any(Date), // Ensure created_at is a date without being specific about its value.
          }),
        }),
      );
    });

    it('evolves state for IdentityDeletedEvent correctly', () => {
      // Mock an initial state that has an existing identity
      const mockExistingState: State = {
        exists: true,
        type: 'identity',
        data: {
          user_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
          sub: 'test_sub',
          identity_provider: 'test_identity_provider',
          created_at: new Date('2023-08-21T10:00:00Z'),
          updated_at: null,
          deleted_at: null,
        },
      };

      const mockEvent = new IdentityDeletedEvent(
        {
          sub: 'test_sub',
          identity_provider: 'test_identity_provider',
        },
        { created_by: 'testUser', created_at: new Date().toISOString() },
      );
      const newState = evolve(mockExistingState, mockEvent);

      expect(newState).toEqual(
        expect.objectContaining({
          exists: true,
          type: 'identity',
          data: expect.objectContaining({
            user_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
            sub: 'test_sub',
            identity_provider: 'test_identity_provider',
            deleted_at: expect.any(Date), // Ensure deleted_at is a date without being specific about its value.
          }),
        }),
      );
    });
  });
});
