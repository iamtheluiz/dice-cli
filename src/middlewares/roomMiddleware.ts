/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import { NextFunction, Request, Response } from 'express';

export type Member = {
  id: string;
  displayName: string;
  username: string;
};

export type Room = {
  id: string;
  name: string;
  members: Member[];
};

declare global {
  namespace Express {
    interface Request {
      rooms: Room[]; // Declare Rooms in Request
    }
  }
}

// eslint-disable-next-line prefer-const
let rooms: Room[] = [];

export default function roomMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  req.rooms = rooms;

  next();
}
