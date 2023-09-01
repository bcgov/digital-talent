import { ApplicationUpdatedEvent } from './application-updated.event';
import { ApplicationUpdatedHandler } from './application-updated.handler';
import { UpdateApplicationInput } from '../../inputs/update-application.input';
import { Metadata } from '../../../../event-store/types/metadata.type';

describe('ApplicationUpdatedHandler', () => {
  let handler: ApplicationUpdatedHandler;
  let mockPrismaService: any;

  beforeEach(() => {
    mockPrismaService = { application: { update: jest.fn() } };
    handler = new ApplicationUpdatedHandler(mockPrismaService);
  });

  it('should handle ApplicationUpdatedEvent correctly', async () => {
    // Mock the data for UpdateApplicationInput and Metadata
    const mockUpdateApplicationInput: UpdateApplicationInput = {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      applicant_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
      json: {
        exampleKey: 'exampleValue',
        anotherKey: 1234,
      },
    };
    const mockMetadata: Metadata = {
      created_at: '2023-08-21T12:00:00Z',
      created_by: 'test-user-id',
    };

    const event = new ApplicationUpdatedEvent(mockUpdateApplicationInput, mockMetadata);

    await handler.handle(event);

    // Assert that mockPrismaService.application.create was called correctly
    const expectedCreateObj = {
      data: {
        applicant: {
          connect: {
            id: mockUpdateApplicationInput.applicant_id,
          },
        },
        json: mockUpdateApplicationInput.json,
        updated_at: mockMetadata.created_at,
      },
      where: {
        id: mockUpdateApplicationInput.id,
      },
    };

    expect(mockPrismaService.application.update).toHaveBeenCalledWith(expectedCreateObj);
  });
});
