import { CreateCompetitionScheduleCommand } from '../commands/create-competition-schedule/create-competition-schedule.command';
import { DeleteCompetitionScheduleCommand } from '../commands/delete-competition-schedule/delete-competition-schedule.command';
import { UpdateCompetitionScheduleCommand } from '../commands/update-competition-schedule/update-competition-schedule.command';
import { CreateCompetitionScheduleInput } from '../inputs/create-competition-schedule.input';
import { UpdateCompetitionScheduleInput } from '../inputs/update-competition-schedule.input';
import { CompetitionScheduleResolver } from './competition-schedule.resolver';

describe('CompetitionScheduleResolver', () => {
  let resolver: CompetitionScheduleResolver;
  let mockCommandBus: any;
  let mockPrismaService: any;

  beforeEach(() => {
    mockCommandBus = { execute: jest.fn() };
    mockPrismaService = {
      competitionSchedule: {
        findMany: jest.fn(),
        findUnique: jest.fn(),
      },
    };
    resolver = new CompetitionScheduleResolver(mockCommandBus, mockPrismaService);
  });

  it('should create an competition-schedule correctly', async () => {
    const input: CreateCompetitionScheduleInput = {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      competition_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
      start_at: new Date('2023-08-21T12:00:00Z'),
      end_at: new Date('2023-08-21T12:00:00Z'),
      state: 'DRAFT',
    };
    const userId = 'd290f1ee-6c54-4b01-90e6-d701748f0853';

    await resolver.createCompetitionSchedule({ id: userId } as any, input);

    expect(mockCommandBus.execute).toHaveBeenCalledWith(
      expect.objectContaining({
        ...new CreateCompetitionScheduleCommand({ ...input }, { created_by: userId }),
      }),
    );
  });

  it('should update an competition-schedule correctly', async () => {
    const input: UpdateCompetitionScheduleInput = {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      competition_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
      start_at: new Date('2023-08-21T12:00:00Z'),
      end_at: new Date('2023-08-21T12:00:00Z'),
      state: 'DRAFT',
    };
    const userId = 'd290f1ee-6c54-4b01-90e6-d701748f0853';

    await resolver.updateCompetitionSchedule({ id: userId } as any, input);

    expect(mockCommandBus.execute).toHaveBeenCalledWith(
      expect.objectContaining({
        ...new UpdateCompetitionScheduleCommand(input, { created_by: userId }),
      }),
    );
  });

  it('should delete an competition-schedule correctly', async () => {
    const appId = 'mockAppId';
    const userId = 'd290f1ee-6c54-4b01-90e6-d701748f0853';

    await resolver.deleteCompetitionSchedule({ id: userId } as any, appId);

    expect(mockCommandBus.execute).toHaveBeenCalledWith(
      expect.objectContaining({
        ...new DeleteCompetitionScheduleCommand({ id: appId }, { created_by: userId }),
      }),
    );
  });

  it('should get all competition-schedules correctly todo: rewrite as it uses query now', async () => {
    const mockCompetitionSchedules = [{ id: '1' }, { id: '2' }];
    mockPrismaService.competitionSchedule.findMany.mockResolvedValueOnce(mockCompetitionSchedules);

    const result = await resolver.competitionSchedules();

    expect(result).toEqual(mockCompetitionSchedules);
    expect(mockPrismaService.competitionSchedule.findMany).toHaveBeenCalled();
  });

  it('should get a specific competition-schedule by id correctly todo: rewrite as it uses query now', async () => {
    const appId = 'mockAppId';
    const mockCompetitionSchedule = { id: appId };
    mockPrismaService.competitionSchedule.findUnique.mockResolvedValueOnce(mockCompetitionSchedule);

    const result = await resolver.competitionSchedule(appId);

    expect(result).toEqual(mockCompetitionSchedule);
    expect(mockPrismaService.competitionSchedule.findUnique).toHaveBeenCalledWith({ where: { id: appId } });
  });
});
