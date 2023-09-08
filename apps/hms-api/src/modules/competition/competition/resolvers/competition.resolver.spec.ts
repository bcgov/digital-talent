import { Test, TestingModule } from '@nestjs/testing';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CompetitionCategory, CompetitionState } from '@prisma/client';
import { PrismaService } from '../../../prisma/prisma.service';
import { GetCompetitionsQuery } from '../queries/get-competitions/get-competitions.query';
import { GetCompetitionQuery } from '../queries/get-competition/get-competition.query';
import { CompetitionResolver } from './competition.resolver';
import { CreateCompetitionCommand } from '../commands/create-competition/create-competition.command';
import { UpdateCompetitionCommand } from '../commands/update-competition/update-competition.command';
import { UpdateCompetitionStateCommand } from '../commands/update-competition-state/update-competition-state.command';
import { DeleteCompetitionCommand } from '../commands/delete-competition/delete-competition.command';

describe('CompetitionResolver', () => {
  let resolver: CompetitionResolver;
  let queryBus: QueryBus;
  let commandBus: CommandBus;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CompetitionResolver,
        {
          provide: QueryBus,
          useValue: {
            execute: jest.fn(),
          },
        },
        {
          provide: CommandBus,
          useValue: {
            execute: jest.fn(),
          },
        },
        {
          provide: PrismaService, // This mock provides the PrismaService in the testing context.
          useValue: {
            // Mock any methods of PrismaService that are used in your services.
            // If none of the methods are used directly in this test, you can leave it as an empty object.
          },
        },
      ],
    }).compile();

    resolver = module.get<CompetitionResolver>(CompetitionResolver);
    queryBus = module.get<QueryBus>(QueryBus);
    commandBus = module.get<CommandBus>(CommandBus);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('getCompetitions', () => {
    it('should get all competitions', async () => {
      const expectedResult = [{ id: 'some-uuid', name: 'Some Competition' }];
      (queryBus.execute as jest.Mock).mockResolvedValueOnce(expectedResult);

      expect(await resolver.competitions()).toBe(expectedResult);
      expect(queryBus.execute).toHaveBeenCalledWith(new GetCompetitionsQuery());
    });
  });

  describe('getCompetition', () => {
    it('should get a single competition by ID', async () => {
      const id = 'some-uuid';
      const expectedResult = { id, name: 'Some Competition' };
      (queryBus.execute as jest.Mock).mockResolvedValueOnce(expectedResult);

      expect(await resolver.competition(id)).toBe(expectedResult);
      expect(queryBus.execute).toHaveBeenCalledWith(new GetCompetitionQuery(id));
    });
  });

  describe('createCompetition', () => {
    it('should create a competition', async () => {
      const mockUser = { id: 'user-uuid', name: 'test_name', email: 'test_email@email.com', roles: ['role1', 'role2'] };
      const input = {
        id: 'some-uuid',
        name: 'Some Competition',
        job_description_id: 'test_id',
        category: CompetitionCategory.CMH,
      };
      const expectedResult = input.id;

      (commandBus.execute as jest.Mock).mockResolvedValueOnce(null);

      expect(await resolver.createCompetition(mockUser, input)).toBe(expectedResult);
      expect(commandBus.execute).toHaveBeenCalledWith(
        new CreateCompetitionCommand({ ...input, recruiter_id: mockUser.id }, { created_by: mockUser.id }),
      );
    });
  });

  describe('updateCompetition', () => {
    it('should update a competition', async () => {
      const mockUser = {
        id: 'user-uuid',
        name: 'test_name',
        email: 'test_email@email.com',
        roles: ['role1', 'role2'],
      };
      const input = {
        id: 'some-uuid',
        name: 'Updated Competition',
        job_description_id: 'test_id',
        category: CompetitionCategory.CMH,
      };
      const expectedResult = input.id;

      (commandBus.execute as jest.Mock).mockResolvedValueOnce(null);

      expect(await resolver.updateCompetition(mockUser, input)).toBe(expectedResult);
      expect(commandBus.execute).toHaveBeenCalledWith(
        new UpdateCompetitionCommand({ ...input, recruiter_id: mockUser.id }, { created_by: mockUser.id }),
      );
    });
  });

  describe('updateCompetitionState', () => {
    it('should update a competition state', async () => {
      const mockUser = {
        id: 'user-uuid',
        name: 'test_name',
        email: 'test_email@email.com',
        roles: ['role1', 'role2'],
      };
      const input = {
        id: 'some-uuid',
        state: CompetitionState.DRAFT,
      };
      const expectedResult = input.id;

      (commandBus.execute as jest.Mock).mockResolvedValueOnce(null);

      expect(await resolver.updateCompetitionState(mockUser, input)).toBe(expectedResult);
      expect(commandBus.execute).toHaveBeenCalledWith(
        new UpdateCompetitionStateCommand(input, { created_by: mockUser.id }),
      );
    });
  });

  describe('deleteCompetition', () => {
    it('should delete a competition', async () => {
      const mockUser = {
        id: 'user-uuid',
        name: 'test_name',
        email: 'test_email@email.com',
        roles: ['role1', 'role2'],
      };
      const input = {
        id: 'some-uuid',
      };
      const expectedResult = input.id;

      (commandBus.execute as jest.Mock).mockResolvedValueOnce(null);

      expect(await resolver.deleteCompetition(mockUser, input)).toBe(expectedResult);
      expect(commandBus.execute).toHaveBeenCalledWith(new DeleteCompetitionCommand(input, { created_by: mockUser.id }));
    });
  });
});
