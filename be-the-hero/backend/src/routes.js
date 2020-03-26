const express = require('express');

const OngCrontroller = require('./controllers/OngCrontroller');
const IncidentCrontroller = require('./controllers/IncidentCrontroller');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();


routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngCrontroller.index);
routes.post('/ongs', OngCrontroller.create);

routes.get('/profile/', ProfileController.index);

routes.get('/incidents', IncidentCrontroller.index);
routes.post('/incidents', IncidentCrontroller.create);
routes.delete('/incidents/:id', IncidentCrontroller.delete);


module.exports = routes;