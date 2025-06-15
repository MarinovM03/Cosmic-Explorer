import express from 'express';
import handlebars from 'express-handlebars';
import expressSession from 'express-session';

import routes from './routes.js';
import initDatabase from './config/dbConfig.js';
import cookieParser from 'cookie-parser';
import { auth } from './middlewares/authMiddleware.js';
import viewHelpers from './views/viewHelpers.js';
import { SESSION_SECRET } from './config/index.js';
import { tempData } from './middlewares/tempDataMiddleware.js';

// Init express
const app = express();

// Init database
initDatabase();

// Static middleware
app.use(express.static('src/public'));

// Use cookie-parser
app.use(cookieParser());

// Use express session
app.use(expressSession({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, httpOnly: true }
}));

// Body parser middleware
app.use(express.urlencoded());

// Config handlebars as view engine
app.engine('hbs', handlebars.engine({
    extname: 'hbs',
    runtimeOptions: {
        allowProtoMethodsByDefault: true,
        allowProtoPropertiesByDefault: true,
    },
    helpers: viewHelpers,
}));

// Set handlebars as default engine
app.set('view engine', 'hbs');

// Change default views directory
app.set('views', 'src/views');

// Use auth middleware
app.use(auth);

// Use temp data middleware
app.use(tempData);

// Add routes
app.use(routes);

app.listen(3000, console.log('Server is listening on http://localhost:3000...'));