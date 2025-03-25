import express from 'express';
import Connection from './db/db.js';
import router from './Router/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

// global middlewares
app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', router);

Connection()
    .then(() => app.listen(3000, () => { console.log(`listening..`) }))
    .catch((err) => console.log(err.message))