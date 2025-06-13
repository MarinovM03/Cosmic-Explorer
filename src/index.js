import express, { urlencoded } from 'express';

import homeController from './controllers/homeController.js';

const app = express();

// Static middleware
app.use(express.static('src/public'));

// Body parser middleware
app.use(express.urlencoded());

app.use(homeController);

app.listen(3000, console.log('Server is listening on http://localhost:3000...'));