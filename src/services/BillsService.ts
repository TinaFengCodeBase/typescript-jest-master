import { Service } from 'typedi';
import { Meter } from '../types/Meter';
import { WaterUsage } from '../types/WaterUsage';
@Service()
export class BillsService {

  public getAllMetersbyLocation(location:string): Meter[] {

    if (location === '') {
      throw new Error('Please select a location');
    }
    else
    {
      const meters:Meter[] =  [
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
      {
       id: 3,
        mode: 'M201CH (Hot)',
        location: 'Providence',
        cost:170,
        operater: 'sc',
        installer: 'tf',
        year:'2020',
        type:'water',
      }
    ];
    
    return meters.filter(meter =>meter.location === location);
  }

  }
}
