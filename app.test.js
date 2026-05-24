// app.test.js
const request = require('supertest');
const app = require('./app');

describe('Testes da API', () => {
  it('Deve retornar status 200 e a mensagem de sucesso na rota /api/status', async () => {
    const response = await request(app).get('/api/status');
    
    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe('success');
    expect(response.body.version).toBe('1.0.0');
  });
});