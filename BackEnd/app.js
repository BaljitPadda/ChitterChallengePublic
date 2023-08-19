import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
const app = express();
const port = 3000;
const host = 'localhost';

import { router as allPeeps } from './routes/allPeeps.js';
import { router as addPeep } from './routes/addPeep.js';
import { router as registerUser } from './routes/registerUser.js';
import { router as getUser } from './routes/getUser.js';

const DB_URI = "mongodb://localhost:27017/Peep";
await mongoose.connect(DB_URI);

app.use(cors());
app.use(bodyParser.json());
app.use('/peeps', allPeeps);
app.use('/addPeep', addPeep);
app.use('/signup', registerUser);
app.use('/login', getUser);

app.listen(port, host, () => {
    console.log(`listening at http://${host}:${port}`)
});


export default app;