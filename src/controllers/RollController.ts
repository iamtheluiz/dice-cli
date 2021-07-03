import { Request, Response } from 'express';
import DiceRoll from 'roll';

export default class RollController {
  static roll(request: Request, response: Response) {
    const { dice } = request.body;

    if (!dice || dice === '' || dice === undefined) {
      return response.status(400).json({
        message: 'Dice value should be provided!',
      });
    }

    try {
      const diceRoll = new DiceRoll();
      const roll = diceRoll.roll(dice);

      return response.status(200).json({
        message: 'Success!',
        result: roll.result,
      });
    } catch (error) {
      if (error.name === 'InvalidInputError') {
        return response.status(400).json(error);
      }

      return response.status(500).json({
        message: 'We got a error running this dice. Try again!',
      });
    }
  }
}
