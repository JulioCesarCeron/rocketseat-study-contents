const express = require('express');

const routes = express.Router();

routes.post('/users', (req, res) => {
	return res.json({
		evento: 'Semana OmniStack',
		aluno: "Julio"
	})
});

module.exports = routes;