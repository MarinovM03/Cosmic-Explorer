import express from 'express';
import handlebars from 'express-handlebars';

import routes from './routes.js';

const app = express();

// Static middleware
app.use(express.static('src/public'));

// Body parser middleware
app.use(express.urlencoded());

// Config handlebars as view engine
app.engine('hbs', handlebars.engine({ extname: 'hbs', }));

// Set handlebars as default engine
app.set('view engine', 'hbs');

// Add routes
app.use(routes);

app.listen(3000, console.log('Server is listening on http://localhost:3000...'));