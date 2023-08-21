import { ApplicationCreatedEvent } from './application-created.event';
import { ApplicationCreatedHandler } from './application-created.handler';
import { CreateApplicationInput } from '../../inputs/create-application.input';
import { Metadata } from '../../../../event-store/types/metadata.type';

describe('ApplicationCreatedHandler', () => {
  let handler: ApplicationCreatedHandler;
  let mockPrismaService: any;

  beforeEach(() => {
    mockPrismaService = { application: { create: jest.fn() } };
    handler = new ApplicationCreatedHandler(mockPrismaService);
  });

  it('should handle ApplicationCreatedEvent correctly', async () => {
    // Mock the data for CreateApplicationInput and Metadata
    const mockCreateApplicationInput: CreateApplicationInput = {
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

    const event = new ApplicationCreatedEvent(mockCreateApplicationInput, mockMetadata);

    await handler.handle(event);

    // Assert that mockPrismaService.application.create was called correctly
    const expectedCreateObj = {
      data: {
        id: mockCreateApplicationInput.id,
        applicant: {
          connect: {
            id: mockCreateApplicationInput.applicant_id,
          },
        },
        json: mockCreateApplicationInput.json,
        created_at: new Date(mockMetadata.created_at),
      },
    };

    expect(mockPrismaService.application.create).toHaveBeenCalledWith(expectedCreateObj);
  });
});
