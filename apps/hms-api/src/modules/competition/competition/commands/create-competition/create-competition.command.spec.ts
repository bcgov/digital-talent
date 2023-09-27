import { CompetitionCategory } from '../../../../../@generated/prisma-nestjs-graphql';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { CreateCompetitionInput } from '../../inputs/create-competition.input';
import { CreateCompetitionCommand } from './create-competition.command';

describe('CreateCompetitionCommand', () => {
  const mockData: CreateCompetitionInput = {
    id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    job_description_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
    deltek_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
    recruiter_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
    category: CompetitionCategory.CMH,
  };

  const mockMetadata: Metadata = {
    created_at: '2023-08-21T12:00:00Z',
    created_by: 'test-user-id',
  };

  it('should correctly set data and metadata using constructor', () => {
    const command = new CreateCompetitionCommand(mockData, mockMetadata);

    expect(command.data).toEqual(mockData);
    expect(command.metadata).toEqual(mockMetadata);
  });

  it('should always set type to "CreateCompetitionCommand"', () => {
    const command = new CreateCompetitionCommand(mockData, mockMetadata);

    expect(command.type).toBe('CreateCompetitionCommand');
  });
});
