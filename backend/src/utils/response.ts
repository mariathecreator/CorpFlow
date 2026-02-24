import { Response } from "express";
import { ApiResponse } from "../types/api-response.js";

export const sendSuccess =<T >(
    res:Response,
    data:T,
    message?:string,
    statusCode= 200
)=>{
    const response: ApiResponse<T>={
        success:true,
        data,
        message
    };

    return res.status(statusCode).json(response);
};


export const sendError =(
    res: Response,
    code: string,
    message:string,
    statusCode= 400,
    details?: unknown
) =>{
    const response: ApiResponse<null> = {
        success: false,
        error:{
            code,
            message,
            details
        }
    };

    return res.status(statusCode).json(response);
}