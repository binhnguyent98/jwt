import { NextFunction, Request, Response } from "express";
import { buildSuccessResponse, buildUnauthorizedResponse } from "../utils/responseUtils";
import tokenService from "../services/tokenService";

export default async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    
    try {
        const headerToken = req.headers.authorization;
        
        if (!headerToken || !headerToken.startsWith("Bearer ")) throw new Error();

        const token         = headerToken.split("Bearer")[1].trim();
        const verifyToken   = tokenService.verifyToken(token);
    
        if(!verifyToken) {
            throw new Error();
        }

        req.user = { id: verifyToken.id, email: verifyToken.email };

        return next();
    } catch(e) {
        return buildUnauthorizedResponse(res, {message: "Login required"})
    }

    
}       