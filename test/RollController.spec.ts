import supertest from 'supertest';
import app from '../src/app';

describe('Test roll endpoints', () => {
  it('should return a number between 1 and 6', async () => {
    const { body } = await supertest(app)
      .post('/api/roll')
      .send({ dice: 'd6' })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(body.message).toBe('Success!');
    expect(body.result).toBeGreaterThanOrEqual(1);
    expect(body.result).toBeLessThanOrEqual(6);
  });

  it('should return a number between 1 and 20', async () => {
    const { body } = await supertest(app)
      .post('/api/roll')
      .send({ dice: 'd20' })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(body.message).toBe('Success!');
    expect(body.result).toBeGreaterThanOrEqual(1);
    expect(body.result).toBeLessThanOrEqual(20);
  });

  it('should return a error message requiring a dice value', async () => {
    const { body } = await supertest(app)
      .post('/api/roll')
      .send({})
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400);

    expect(body.message).toBe('Dice value should be provided!');
  });

  it('should return a error because of misformatting', async () => {
    const dice = 'dice';

    const { body } = await supertest(app)
      .post('/api/roll')
      .send({ dice })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400);

    expect(body.name).toBe('InvalidInputError');
    expect(body.message).toBe(
      `"${dice}" is not a valid input string for node-roll.`,
    );
  });
});
