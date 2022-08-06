import { Test, TestingModule } from '@nestjs/testing';
import { CauseOfCrimeController } from './cause-of-crime.controller';

describe('CauseOfCrimeController', () => {
  let controller: CauseOfCrimeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CauseOfCrimeController],
    }).compile();

    controller = module.get<CauseOfCrimeController>(CauseOfCrimeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
