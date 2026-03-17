import { Request,Response,NextFunction } from "express";
import { AppError } from "../utils/error.js";
import { sendError } from "../utils/response.js";


export function errorMiddleware(
    err:Error,
    req:Request,
    res:Response,
    next:NextFunction
){
    if(err instanceof AppError){
        return sendError(res,err.errorCode,err.message,err.statusCode);
    }

    console.error(err);

    return sendError(
        res,
        "INTERNAL_SERVER_ERROR",
        "something went wrong",
        500
    );
}