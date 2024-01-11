import { JobDescriptionDeletedEvent } from './job-description-deleted.event';
import { JobDescriptionDeletedHandler } from './job-description-deleted.handler';
import { Metadata } from '../../../event-store/types/metadata.type';
import { DeleteJobDescriptionInput } from '../../inputs/delete-job-description.input';

describe('JobDescriptionDeletedHandler', () => {
  let handler: JobDescriptionDeletedHandler;
  let mockPrismaService: any;

  beforeEach(() => {
    mockPrismaService = { jobDescription: { update: jest.fn() } };
    handler = new JobDescriptionDeletedHandler(mockPrismaService);
  });

  it('should handle JobDescriptionDeletedEvent correctly', async () => {
    // Mock the data for DeleteJobDescriptionInput and Metadata
    const mockDeleteJobDescriptionInput: DeleteJobDescriptionInput = {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    };
    const mockMetadata: Metadata = {
      created_at: '2023-08-21T12:00:00Z',
      created_by: 'test-user-id',
    };

    const event = new JobDescriptionDeletedEvent(mockDeleteJobDescriptionInput, mockMetadata);

    await handler.handle(event);

    // Assert that mockPrismaService.job-description.create was called correctly
    const expectedCreateObj = {
      data: {
        deleted_at: mockMetadata.created_at,
      },
      where: {
        id: mockDeleteJobDescriptionInput.id,
      },
    };

    expect(mockPrismaService.jobDescription.update).toHaveBeenCalledWith(expectedCreateObj);
  });
});
