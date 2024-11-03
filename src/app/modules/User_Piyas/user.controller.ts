import { NextFunction, Request, Response } from "express";
import Async_Catch from "../../utils/try.code";
import httpStatus from 'http-status-codes';
import { User_Services } from "./user.services";



// create user controller
const Create_User_Controller = Async_Catch(async (req: Request, res: Response, next: NextFunction) => {

    const result = await User_Services.Create_User_Service(req.body);

    res.status(httpStatus.OK).json({
        success: true,
        message: "Successfully create a user !",
        data: result
    })
})



export const User_Controller = {
    Create_User_Controller,

}