const request = require('supertest');
const app = require('../index');


describe('controller test GET', () => {
    test('ok', async () => {
        const response = await request(app).get('/hello');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Hello GET');
    });
});

describe('controller test POST', () => {
    test('ok', async () => {
        data = {userId: 1}
        const response = (
            await request(app)
            .post('/hello')
            .send(data)
            .set('Accept', 'application/json')
        );
        expect(response.status).toBe(200);
        expect(JSON.stringify(response.body)).toBe(JSON.stringify(data));
    });
});
