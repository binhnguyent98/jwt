import { validationResult, CustomValidator } from "express-validator";
import { Response, Request, NextFunction } from "express";
import statusCode from "http-status-codes";
import { responseData } from "../utils/responseUtils";

export default (req: Request, res: Response, next: NextFunction): any => {
    const validationError = validationResult(req);
   
    if (!validationError.isEmpty()) {
        const errors = validationError.array();
        
        return responseData(res, {
            status_code: statusCode.BAD_REQUEST,
            message: "bad request",
            data: { errors: errors as [] }
        });
    }

    next();
}