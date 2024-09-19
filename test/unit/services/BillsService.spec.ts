import { BillsService } from "../../../src/services/BillsService";
import { Meter } from "../../../src/types/Meter";
import { Bill } from "../../../src/types/Bill";
import { WaterUsage } from "../../../src/types/WaterUsage";

describe('BillsService', () => {
  let service: BillsService;
  beforeEach(() => {
    service = new BillsService();
  });

  it('should define bill service', () => {
    expect(service).toBeInstanceOf(BillsService);
  });

  describe('getAllMetersbyLocation', () => {
    it('should get mock fixed bills', () => {
      const meters: Meter[] = service.getAllMetersbyLocation('Logan');
      expect(meters).toHaveLength(2);
      expect(meters[0]).toEqual({
        id: 1,
        mode: 'NextMeter NM4-I (Indoor)',
        location: 'Logan',
        cost:150,
        operater: 'tf',
        installer: 'mc',
        year:'2004',
        type:'water',
      });
    });


    it('should throw error empty location', () => {
      expect(() => {
        service.getAllMetersbyLocation('');
      }).toThrow('Please select a location');
    });
  });
});
