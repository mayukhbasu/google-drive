import { Request, Response } from "express";

export class HomeController {

  public getIndex(req: Request, res: Response): void {
    res.send('Welcome to the Home Page!');
  } 
}