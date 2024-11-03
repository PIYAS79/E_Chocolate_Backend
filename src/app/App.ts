import "reflect-metadata"

import express, { Request, Response } from 'express';
import httpStatus from 'http-status-codes';
import { createConnection } from "typeorm";
import config from "./config";
import { Server_Routes } from "./routes";
import Routes_Not_Found_Handler from "./errors/routeNotFoundError";
import Global_Error_Handler from "./errors/globalErrorHandler";


const app = express();

// Middlewares 
app.use(express.json());


// database connection 
createConnection({
    type: 'mysql',
    host: 'localhost',
    port: 3307,
    username: 'root',
    password: '',
    database: 'e_chocolate',
    synchronize: true,
    logging: config.server_status === "DEVELOPMENT" ? true : false,
    entities: []
})


// Initial Route
app.get('/', (req: Request, res: Response) => {
    try {
        res.status(httpStatus.OK).json({
            success: true,
            message: "Welcome to E-Chocolate Backend ! 🤩"
        })
    } catch (err: any) {
        console.log(err);
    }
})


// Server Routes 
app.use('/app/v1', Server_Routes);


// Route not found error handler
app.use('*', Routes_Not_Found_Handler);

// Server Error Handler
app.use(Global_Error_Handler);



export default app;