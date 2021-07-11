import { Request, Response } from 'express';

export default class HomeController {
  static index(request: Request, response: Response) {
    const { rooms } = request;

    return response.render('home', {
      rooms,
    });
  }
}
