import { Test, TestingModule } from '@nestjs/testing';
import { CourtChargeController } from './court-charge.controller';

describe('CourtChargeController', () => {
  let controller: CourtChargeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CourtChargeController],
    }).compile();

    controller = module.get<CourtChargeController>(CourtChargeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
