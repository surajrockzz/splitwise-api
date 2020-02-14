import express from 'express';
import env from 'dotenv';
import path from 'path';
import logger from 'morgan';
import bodyParser from 'body-parser';
import debug from 'debug';
env.config();

import indexRouter from './routes/index';
import usersRouter from './routes/users';
import loginRouter from './routes/login';

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/users', usersRouter);

app.listen(process.env.PORT || '5000', () => debug(`Server running on port ${process.env.PORT || 5000}`));

