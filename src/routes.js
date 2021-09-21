const {Router} = require('express');
const PostController = require('./controller/PostController');
const configImage = require('./config/upload');
const multer = require('multer');

const routes = new Router();

const upload = multer(configImage);

routes.get('/posts', PostController.show);

routes.post('/posts', upload.single('image'), PostController.store);

routes.delete('/posts', PostController.destroy);

module.exports = routes;