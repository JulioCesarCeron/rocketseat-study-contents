/* eslint-disable new-cap */
const multer = require('multer');
const path = require('path');

module.exports = {
  storage: new multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'uploads'),
    filename(_req, file, callback) {
      callback(null, file.originalname);
    },
  }),
};
