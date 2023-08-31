import { Test, TestingModule } from '@nestjs/testing';
import { JobDescriptionResolver } from './job-description.resolver';

describe('JobDescriptionResolver', () => {
  let resolver: JobDescriptionResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JobDescriptionResolver],
    }).compile();

    resolver = module.get<JobDescriptionResolver>(JobDescriptionResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
