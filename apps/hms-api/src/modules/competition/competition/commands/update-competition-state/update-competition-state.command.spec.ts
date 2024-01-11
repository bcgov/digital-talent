import { CompetitionState } from '../../../../../@generated/prisma-nestjs-graphql';
import { Metadata } from '../../../../event-store/types/metadata.type';
import { UpdateCompetitionStateInput } from '../../inputs/update-competition-state.input';
import { UpdateCompetitionStateCommand } from './update-competition-state.command';

describe('UpdateCompetitionStateCommand', () => {
  const mockData: UpdateCompetitionStateInput = {
    id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    state: CompetitionState.DRAFT,
  };

  const mockMetadata: Metadata = {
    created_at: '2023-08-21T12:00:00Z',
    created_by: 'test-user-id',
  };

  it('should correctly set data and metadata using constructor', () => {
    const command = new UpdateCompetitionStateCommand(mockData, mockMetadata);

    expect(command.data).toEqual(mockData);
    expect(command.metadata).toEqual(mockMetadata);
  });

  it('should always set type to "UpdateCompetitionStateCommand"', () => {
    const command = new UpdateCompetitionStateCommand(mockData, mockMetadata);

    expect(command.type).toBe('UpdateCompetitionStateCommand');
  });
});
