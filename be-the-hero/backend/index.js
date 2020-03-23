const express = require('express');


const app = express();

app.get('/contato', (req, res) => {
	return res.json({
		evento: 'Semana OmniStack',
		aluno: "Julio ceron"
	})
});

app.listen(3333);