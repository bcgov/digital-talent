import { JobDescriptionCreatedEvent } from './job-description-created.event';
import { JobDescriptionCreatedHandler } from './job-description-created.handler';
import { CreateJobDescriptionInput } from '../../inputs/create-job-description.input';
import { Metadata } from '../../../event-store/types/metadata.type';

describe('JobDescriptionCreatedHandler', () => {
  let handler: JobDescriptionCreatedHandler;
  let mockPrismaService: any;

  beforeEach(() => {
    mockPrismaService = { jobDescription: { create: jest.fn() } };
    handler = new JobDescriptionCreatedHandler(mockPrismaService);
  });

  it('should handle JobDescriptionCreatedEvent correctly', async () => {
    // Mock the data for CreateJobDescriptionInput and Metadata
    const mockCreateJobDescriptionInput: CreateJobDescriptionInput = {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      classification_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
      e_class_id: 'test_e_class_id',
      name: 'test_name',
    };
    const mockMetadata: Metadata = {
      created_at: '2023-08-21T12:00:00Z',
      created_by: 'test-user-id',
    };

    const event = new JobDescriptionCreatedEvent(mockCreateJobDescriptionInput, mockMetadata);

    await handler.handle(event);

    // Assert that mockPrismaService.job-description.create was called correctly
    const expectedCreateObj = {
      data: {
        id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
        classification: {
          connect: {
            id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
          },
        },
        e_class_id: 'test_e_class_id',
        name: 'test_name',
        created_at: mockMetadata.created_at,
      },
    };

    expect(mockPrismaService.jobDescription.create).toHaveBeenCalledWith(expectedCreateObj);
  });
});
