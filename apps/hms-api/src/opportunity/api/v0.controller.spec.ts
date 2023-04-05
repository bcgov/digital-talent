import { Test, TestingModule } from '@nestjs/testing';
import { OpportunityService } from '../opportunity.service';
import { OpportunityApiV0Controller } from './v0.controller';

describe('OpportunityApiV0Controller', () => {
  let controller: OpportunityApiV0Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OpportunityApiV0Controller],
      providers: [OpportunityService],
    }).compile();

    controller = module.get<OpportunityApiV0Controller>(OpportunityApiV0Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
