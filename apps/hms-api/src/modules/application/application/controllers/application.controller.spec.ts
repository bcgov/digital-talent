import { Test, TestingModule } from '@nestjs/testing';
import { CommandBus } from '@nestjs/cqrs';
import { PrismaService } from '../../../prisma/prisma.service';
import { ApplicationService } from '../application.service';
import { ApplicationController } from './application.controller';

describe('ApplicationController', () => {
  let controller: ApplicationController;
  let mockCommandBus: any;
  let mockPrismaService: any;
  let mockApplicationService: jest.Mocked<ApplicationService>;

  beforeEach(async () => {
    mockCommandBus = { execute: jest.fn() };
    mockPrismaService = {
      user: { findUnique: jest.fn(), create: jest.fn() },
      application: { findMany: jest.fn() },
    };
    mockApplicationService = { parseQSTCSV: jest.fn() };
    const mockParsedCSVData = {
      requisitionNumber: 'mockRequisitionNumber',
      positionTitle: 'mockPositionTitle',
      parsedData: [
        {
          firstName: 'mockFirstName',
          lastName: 'mockLastName',
          ministry: 'mockMinistry',
          deltek_id: 'mockDeltekId',
          city: 'mockCity',
          email: 'mockEmail',
          jsonData: 'mockJsonData',
        },
      ],
    };

    mockApplicationService.parseQSTCSV.mockReturnValue(mockParsedCSVData);

    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApplicationController],
      providers: [
        { provide: CommandBus, useValue: mockCommandBus },
        { provide: PrismaService, useValue: mockPrismaService },
        { provide: ApplicationService, useValue: mockApplicationService },
      ],
    }).compile();

    controller = module.get<ApplicationController>(ApplicationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('importCsv', () => {
    const mockRequest = {
      body: `Requisition No.,12345
      Position Title,Manager
      Applicant First Name,Applicant Last Name,Current Ministry,,id,City,Email,Additional Data
      John,Doe,Finance,,123,New York,john.doe@example.com,value1`,
      user: { id: 'testUserId' },
    };

    it('should handle new users correctly', async () => {
      mockPrismaService.application.findMany.mockReturnValue([]); // mocks no applications present for a user
      mockPrismaService.user.findUnique.mockResolvedValueOnce(null); // Mocks that the user does not exist

      await controller.importCsv(mockRequest);

      // Check the first call to mockCommandBus.execute
      expect(mockCommandBus.execute).toHaveBeenNthCalledWith(
        1,
        expect.objectContaining({
          type: 'SyncUserCommand',
          data: expect.any(Object),
          metadata: expect.any(Object),
        }),
      );

      // Check the second call to mockCommandBus.execute
      expect(mockCommandBus.execute).toHaveBeenNthCalledWith(
        2,
        expect.objectContaining({
          type: 'CreateApplicationCommand',
          data: expect.any(Object),
          metadata: expect.any(Object),
        }),
      );
    });

    it('should handle existing users correctly', async () => {
      mockPrismaService.application.findMany.mockReturnValue([]); // mocks no applications present for a user
      mockPrismaService.user.findUnique.mockResolvedValueOnce({ id: 'existingUserId', deltek_id: 'testDeltek' }); // Mocks that the user exists

      await controller.importCsv(mockRequest);

      // SyncUserCommand shouldn't be called for existing users
      expect(mockCommandBus.execute).not.toHaveBeenCalledWith(
        expect.objectContaining({
          type: 'SyncUserCommand',
          data: expect.any(Object),
          metadata: expect.any(Object),
        }),
      );
    });

    // it('should create new applications for users without any', async () => {
    //   mockPrismaService.application.findMany.mockResolvedValueOnce([]); // Mocks that the user has no applications

    //   await controller.importCsv(mockRequest);

    //   // Check if the CreateApplicationCommand was called to create a new application
    //   expect(mockCommandBus.execute).toHaveBeenCalledWith(expect.any(CreateApplicationCommand), expect.any(Object));
    // });
  });
});
