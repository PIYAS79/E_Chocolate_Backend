



import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status-codes';



const Routes_Not_Found_Handler = (req: Request, res: Response, next: NextFunction) => {
    try {
        res.status(httpStatus.NOT_FOUND).json({
            success: false,
            message: "Route Not Found *"
        })
    } catch (err: any) {
        console.log(err);
    }
}


export default Routes_Not_Found_Handler;