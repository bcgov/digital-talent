import { LocationRegion } from '../../../../@generated/prisma-nestjs-graphql';
import { Metadata } from '../../../event-store/types/metadata.type';
import { UpdateLocationInput } from '../../inputs/update-location.input';
import { UpdateLocationCommand } from './update-location.command';

describe('UpdateLocationCommand', () => {
  const mockData: UpdateLocationInput = {
    id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    deltek_id: 'test_deltek_id',
    name: 'test_name',
    postal_code: 'V9M 3K2',
    lat: 0.23,
    lon: 0.25,
    region: LocationRegion.CARIBOO,
  };

  const mockMetadata: Metadata = {
    created_at: '2023-08-21T12:00:00Z',
    created_by: 'test-user-id',
  };

  it('should correctly set data and metadata using constructor', () => {
    const command = new UpdateLocationCommand(mockData, mockMetadata);

    expect(command.data).toEqual(mockData);
    expect(command.metadata).toEqual(mockMetadata);
  });

  it('should always set type to "UpdateLocationCommand"', () => {
    const command = new UpdateLocationCommand(mockData, mockMetadata);

    expect(command.type).toBe('UpdateLocationCommand');
  });
});
