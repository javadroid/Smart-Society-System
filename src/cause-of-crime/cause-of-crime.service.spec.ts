import { Test, TestingModule } from '@nestjs/testing';
import { CauseOfCrimeService } from './cause-of-crime.service';

describe('CauseOfCrimeService', () => {
  let service: CauseOfCrimeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CauseOfCrimeService],
    }).compile();

    service = module.get<CauseOfCrimeService>(CauseOfCrimeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
