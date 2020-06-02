import express from 'express';

const app = express();

app.get('/users', (request, response) => {
	response.json([
		`teset - ${request.params}`,
		'teste 3'
	]);
});

app.listen(3333);