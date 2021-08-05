import { Request, Response } from "express";
import BaseController from "./baseController";
import userService from "../../services/userService";
import tokenService from "../../services/tokenService";

class authController extends BaseController {

    public constructor() {
        super();
    }

    public async register(req: Request, res: Response): Promise<any> {
        const isCreate = await userService.createUser(req.body);
        
        if (!isCreate.status) {
            return this.failResponse(res, isCreate);    
        }
    
        return this.succesResponse(res, isCreate);
    }

    public async login(req: Request, res: Response): Promise<any> {
        const { email, password } = req.body;
        const resultLogin = await userService.login(email, password);

        if (!resultLogin.status) 
            return this.unauthorizedResponse(res, resultLogin); 

        return this.succesResponse(res, resultLogin); 
    }   

    public async refreshToken(req: Request, res: Response): Promise<any> {
        const isToken = await tokenService.verifyRefreshToken(req.body.refresh_token);
        if (isToken.status) {
            return this.succesResponse(res, isToken);
        }

        return this.failResponse(res, isToken);  

    }   
}

export default new authController();