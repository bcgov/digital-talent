import { Test, TestingModule } from '@nestjs/testing';
import { ApplicationService } from './application.service';

describe('ApplicationService', () => {
  let service: ApplicationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApplicationService],
    }).compile();

    service = module.get<ApplicationService>(ApplicationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('parseQSTCSV', () => {
    it('should parse requisition number and position title correctly', () => {
      const csvData = 'Requisition No.,12345\nPosition Title,Manager\n';
      const result = service.parseQSTCSV(csvData);
      expect(result.requisitionNumber).toEqual('12345');
      expect(result.positionTitle).toEqual('Manager');
    });

    it('should correctly map CSV data', () => {
      const csvData = `Requisition No.,12345
Position Title,Manager
Applicant First Name,Applicant Last Name,Current Ministry,,id,City,Email,Additional Data
John,Doe,Finance,,123,New York,john.doe@example.com,value1
Jane,Smith,Health,,456,Los Angeles,jane.smith@example.com,value2
`;

      const result = service.parseQSTCSV(csvData);
      expect(result.requisitionNumber).toEqual('12345');
      expect(result.positionTitle).toEqual('Manager');
      expect(result.parsedData).toEqual([
        {
          firstName: 'John',
          lastName: 'Doe',
          ministry: 'Finance',
          deltek_id: '123',
          city: 'New York',
          email: 'john.doe@example.com',
          jsonData: { 'Additional Data': 'value1' },
        },
        {
          firstName: 'Jane',
          lastName: 'Smith',
          ministry: 'Health',
          deltek_id: '456',
          city: 'Los Angeles',
          email: 'jane.smith@example.com',
          jsonData: { 'Additional Data': 'value2' },
        },
      ]);
    });

    it('should handle missing fields gracefully', () => {
      const csvData = `Requisition No.,12345
Position Title,Manager
Applicant First Name,Applicant Last Name,,id,City,Email
John,Doe,,123,New York,john.doe@example.com
`;

      const result = service.parseQSTCSV(csvData);
      expect(result.requisitionNumber).toEqual('12345');
      expect(result.positionTitle).toEqual('Manager');
      expect(result.parsedData[0]).toEqual(
        expect.objectContaining({
          firstName: 'John',
          lastName: 'Doe',
          deltek_id: '123',
          city: 'New York',
          email: 'john.doe@example.com',
        }),
      );
      // Since "Current Ministry" is missing, it should be undefined
      expect(result.parsedData[0].ministry).toBeUndefined();
    });
  });
});
