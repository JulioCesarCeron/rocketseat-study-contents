const supertest = require("supertest");
const app = require('../../src/app');
const connection = require('../../src/database/connection');

const request = supertest

describe('ONG', () => {
	beforeEach(async () => {
		await connection.migrate.rollback();
		// await connection.migrate.latest();
	})

	afterAll( async () => {
		await connection.destroy();
	})

	it('should be able to create a new ONG', async () => {
		const response = await request(app).post('/ongs').send({
			name: 'APAD3',
			email: 'contato@lskdjf.com.br',
			whatsapp: '4700000000',
			city: 'Florianópolis',
			uf: 'SC'
		});

		expect(response.body).toHaveProperty('id');
		expect(response.body.id).toHaveLength(8);
	})
})