const express = require('express');
const { celebrate, Segments, Joi} = require('celebrate');

const OngCrontroller = require('./controllers/OngCrontroller');
const IncidentCrontroller = require('./controllers/IncidentCrontroller');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();


routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngCrontroller.index);
routes.post('/ongs', celebrate({
	[Segments.BODY]: Joi.object().keys({
		name: Joi.string().required(),
		email: Joi.string().required().email(),
		whatsapp: Joi.string().required().min(10).max(11),
		city: Joi.string().required(),
		uf: Joi.string().required().length(2),
	})
}), OngCrontroller.create);

routes.get('/profile/', celebrate({
	[Segments.HEADERS]: Joi.object({
		authorization: Joi.string().required(),
	}).unknown()
}), ProfileController.index);

routes.get('/incidents', celebrate({
	[Segments.QUERY]: Joi.object().keys({
		page: Joi.number(),
	})
}), IncidentCrontroller.index);
routes.post('/incidents', IncidentCrontroller.create);
routes.delete('/incidents/:id', celebrate({
	[Segments.PARAMS]: Joi.object().keys({
		id: Joi.number().required(),
	}),
	[Segments.HEADERS]: Joi.object({
		authorization: Joi.string().required(),
	}).unknown()
}), IncidentCrontroller.delete);


module.exports = routes;