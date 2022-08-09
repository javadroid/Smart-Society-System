import { Test, TestingModule } from '@nestjs/testing';
import { PrisonWardService } from './prison-ward.service';

describe('PrisonWardService', () => {
  let service: PrisonWardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrisonWardService],
    }).compile();

    service = module.get<PrisonWardService>(PrisonWardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
