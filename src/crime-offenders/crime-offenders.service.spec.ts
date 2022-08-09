import { Test, TestingModule } from '@nestjs/testing';
import { CrimeOffendersService } from './crime-offenders.service';

describe('CrimeOffendersService', () => {
  let service: CrimeOffendersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CrimeOffendersService],
    }).compile();

    service = module.get<CrimeOffendersService>(CrimeOffendersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
