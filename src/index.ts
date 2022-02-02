import * as express from 'express';
import { Application } from 'express';
import * as cors from 'cors';
import helmet from 'helmet';
import './db/connection'
import { config } from './config/config';
const app:Application=express();
app.use(cors());
app.use(helmet());
app.listen(config.PORT,()=>{
    console.info(`server started at ${config.PORT}`)
})
