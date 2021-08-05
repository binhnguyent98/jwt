import httpStatusCodes from 'http-status-codes';
import { Request, Response, NextFunction } from "express";


export default async (error: any, req: Request, res: Response, next: NextFunction): Promise<any> => {
    const status = httpStatusCodes.INTERNAL_SERVER_ERROR;
    const message = "Internal Server Error";
    
    return res.status(status).send({ status, message })
};