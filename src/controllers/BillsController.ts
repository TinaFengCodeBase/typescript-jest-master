import { Service } from 'typedi';
import { BillsService } from '../services/BillsService';
import { Meter } from '../types/Meter';
import { Bill } from '../types/Bill';

@Service()
export class BillsController {
  private billsService: BillsService;

  public constructor(billsService: BillsService) {
    this.billsService = billsService;
  }
  
  public getAllMetersbyLocation(location:string): Meter[] {
    if (location === '') {
        throw new Error('Please select a location');
    }
    return this.billsService.getAllMetersbyLocation(location);
  }
}
