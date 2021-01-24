import express from 'express';
import path from 'path';
import morgan from 'morgan';
import router from './routes';

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '/../public')));
app.use(morgan('tiny'));

app.use('/', (req, res) => res.send('hi'));
app.use('/api/user', router.user);

export default app;
