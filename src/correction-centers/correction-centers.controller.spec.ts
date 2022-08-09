import { Test, TestingModule } from '@nestjs/testing';
import { CorrectionCentersController } from './correction-centers.controller';

describe('CorrectionCentersController', () => {
    let controller: CorrectionCentersController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [CorrectionCentersController],
        }).compile();

        controller = module.get<CorrectionCentersController>(CorrectionCentersController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
