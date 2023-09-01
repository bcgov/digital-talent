import { Test, TestingModule } from '@nestjs/testing';
import { OccupationGroupResolver } from './occupation-group.resolver';

describe('OccupationGroupResolver', () => {
  let resolver: OccupationGroupResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OccupationGroupResolver],
    }).compile();

    resolver = module.get<OccupationGroupResolver>(OccupationGroupResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
