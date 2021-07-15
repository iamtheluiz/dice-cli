/// <reference types="jest" />

import supertest from 'supertest';
import { validate as uuidValidate } from 'uuid';
import app from '../src/app';

describe('Test room endpoints', () => {
  it('should create a new room', async () => {
    const room = {
      name: 'Call of Cthulhu',
    };

    const { body } = await supertest(app)
      .post('/room')
      .send(room)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(body.name).toBe(room.name);
    expect(body).toHaveProperty('id');
    expect(uuidValidate(body.id)).toBeTruthy();
    expect(body).toHaveProperty('members');
    expect(Array.isArray(body.members)).toBeTruthy();
  });

  it('should return a error', async () => {
    const { body } = await supertest(app)
      .post('/room')
      .send()
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400);

    expect(body.message).toBe('Room name is required!');
  });
});
