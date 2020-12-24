import express from 'express';
import router from './routes';
import path from 'path';
import morgan from 'morgan';

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '/../public')));
app.use(morgan('tiny'));

app.use('/api/user', router.user);

export default app;
