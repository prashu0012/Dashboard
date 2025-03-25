import express from 'express';
import Connection from './db/db.js';
import router from './Router/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

// global middlewares
app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', router);

const port = process.env.PORT || 3000;

Connection()
    .then(() => app.listen(port, () => { console.log(`listening..`) }))
    .catch((err) => console.log(err.message))
