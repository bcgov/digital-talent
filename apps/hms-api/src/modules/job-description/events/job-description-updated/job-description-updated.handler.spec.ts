import { JobDescriptionUpdatedEvent } from './job-description-updated.event';
import { JobDescriptionUpdatedHandler } from './job-description-updated.handler';
import { UpdateJobDescriptionInput } from '../../inputs/update-job-description.input';
import { Metadata } from '../../../event-store/types/metadata.type';

describe('JobDescriptionUpdatedHandler', () => {
  let handler: JobDescriptionUpdatedHandler;
  let mockPrismaService: any;

  beforeEach(() => {
    mockPrismaService = { jobDescription: { update: jest.fn() } };
    handler = new JobDescriptionUpdatedHandler(mockPrismaService);
  });

  it('should handle JobDescriptionUpdatedEvent correctly', async () => {
    // Mock the data for UpdateJobDescriptionInput and Metadata
    const mockUpdateJobDescriptionInput: UpdateJobDescriptionInput = {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      classification_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
      e_class_id: 'test_e_class_id',
      name: 'test_name',
    };
    const mockMetadata: Metadata = {
      created_at: '2023-08-21T12:00:00Z',
      created_by: 'test-user-id',
    };

    const event = new JobDescriptionUpdatedEvent(mockUpdateJobDescriptionInput, mockMetadata);

    await handler.handle(event);

    // Assert that mockPrismaService.job-description.create was called correctly
    const expectedCreateObj = {
      data: {
        classification: {
          connect: {
            id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
          },
        },
        e_class_id: 'test_e_class_id',
        name: 'test_name',
        updated_at: mockMetadata.created_at,
      },
      where: {
        id: mockUpdateJobDescriptionInput.id,
      },
    };

    expect(mockPrismaService.jobDescription.update).toHaveBeenCalledWith(expectedCreateObj);
  });
});
