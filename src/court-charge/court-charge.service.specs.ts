import { Test, TestingModule } from '@nestjs/testing';
import { CourtChargeService } from './court-charge.service';

describe('CourtChargeService', () => {
  let service: CourtChargeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CourtChargeService],
    }).compile();

    service = module.get<CourtChargeService>(CourtChargeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
