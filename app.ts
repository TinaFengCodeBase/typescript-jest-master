import express, { Request, Response } from 'express';
import { BillsController } from './src/controllers/BillsController';
import { Container } from 'typedi';

class App {
 public express: express.Application;

 public constructor(public billsController: BillsController) {
    this.express = express();
    this.routes();    
  }

  private routes(): void {   	
    this.express.get('/', (req: Request, res: Response) => {
      res.send({ message: 'Express server built using TypeScript' });
    });

    this.express.get('/api/bills', (req: Request, res: Response) => {
      res.send({ data: this.billsController.getAllMetersbyLocation('Logan' || '') });
    });
  }
}

export default new App(Container.get(BillsController)).express;
