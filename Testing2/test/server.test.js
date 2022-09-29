const request = require('supertest')
const app = require('../src/server')

describe('Login', () => {
  it('user & pass ok', async () => {
    const res = await request(app)
      .post('/login')
      .send({
        username: "daniel",
        password: "123456",
      })
      expect(res.statusCode).toEqual(200);
  })
  it('user & pass incorrect', async () => {
    const res = await request(app)
      .post('/login')
      expect(res.statusCode).toEqual(400);
  })
  it('sin parametros', async () => {
    const res = await request(app)
      .post('/login')
      .send({
        username: "daniel",
        password: "123456",
      })
      expect(res.statusCode).toEqual(200);
  })
})
