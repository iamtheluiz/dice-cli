import { Request, Response } from 'express';

export default class HomeController {
  static index(request: Request, response: Response) {
    return response.render('home');
  }
}
