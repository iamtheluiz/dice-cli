import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

import { Room } from '../middlewares/roomMiddleware';

export default class RoomController {
  static index(request: Request, response: Response) {
    return response.render('room');
  }

  static createRoom(request: Request, response: Response) {
    const { name } = request.body;

    if (!name) {
      return response.status(400).json({
        message: 'Room name is required!',
      });
    }

    const room: Room = {
      id: uuidv4(),
      name,
      members: [],
    };

    request.rooms.push(room);

    return response.status(200).json(room);
  }
}
