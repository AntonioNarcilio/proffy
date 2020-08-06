import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
// 🎯 Faze  com que o express intenda json
app.use(express.json());

app.use(routes)

app.listen(3333);

