import { Test, TestingModule } from '@nestjs/testing';
import { PrisonWardController } from './prison-ward.controller';

describe('CauseOfCrimeController', () => {
  let controller: PrisonWardController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrisonWardController],
    }).compile();

    controller = module.get<PrisonWardController>(PrisonWardController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
