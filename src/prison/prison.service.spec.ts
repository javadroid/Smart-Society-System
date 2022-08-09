import { Test, TestingModule } from '@nestjs/testing';
import { PrisonService } from './prison.service';

describe('PrisonService', () => {
  let service: PrisonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrisonService],
    }).compile();

    service = module.get<PrisonService>(PrisonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
