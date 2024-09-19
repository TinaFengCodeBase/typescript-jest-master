import { BillsController } from "../../../src/controllers/BillsController";
import { BillsService } from '../../../src/services/BillsService';
import { Meter } from "../../../src/types/Meter";

describe('BillsController', () => {
  let controller: BillsController;

  const mockBillsService = {
    getAllMetersbyLocation: jest.fn()
  } as BillsService;
  beforeEach(() => {
    controller = new BillsController(mockBillsService);
  });

  it('should define bills controller', () => {
    expect(controller).toBeInstanceOf(BillsController);
  });

  describe('getAllMetersbyLocation', () => {
    it('should get Meter Bills', () => {
      mockBillsService.getAllMetersbyLocation = jest.fn().mockReturnValueOnce([
        {
            id: 1,
            mode: 'NextMeter NM4-I (Indoor)',
            location: 'Logan',
            cost:150,
            operater: 'tf',
            installer: 'mc',
            year:'2004',
            type:'water',
        },
        {
            id: 2,
            mode: 'M201C (Cold)',
            location: 'Logan',
            cost:160,
            operater: 'sc',
            installer: 'mc',
            year:'2024',
            type:'water',
        },
      ] as Meter[]);


      

      const meters:Meter[] = controller.getAllMetersbyLocation('Logan');
      expect(meters).toHaveLength(2);
      expect(meters[0].mode).toBe('NextMeter NM4-I (Indoor)')
      expect(meters[1].location).toEqual(expect.stringContaining('Logan'));
      expect(meters[1]).toEqual(expect.objectContaining({
        id: 2
      }));
      expect(meters[1]).toEqual({
        id: 2,
        mode: 'M201C (Cold)',
        location: 'Logan',
        cost:160,
        operater: 'sc',
        installer: 'mc',
        year:'2024',
        type:'water',
      });
      expect(mockBillsService.getAllMetersbyLocation).toHaveBeenCalledTimes(1);
      expect(mockBillsService.getAllMetersbyLocation).toHaveBeenCalledWith('Logan');
    });

    it('should throw error empty location', () => {
        expect(() => {
          controller.getAllMetersbyLocation('');
        }).toThrow('Please select a location');
    });
  });
});
