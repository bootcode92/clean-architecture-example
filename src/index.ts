require('dotenv').config();
import * as express from 'express';
import { UserRouter } from './api/routes/user';
const port = +process.env.PORT;

// Type the app const.
const app = express();

app.use('/user', UserRouter);

app.listen(port, () => {
    console.info(`server listenning on port ${port}`)
})