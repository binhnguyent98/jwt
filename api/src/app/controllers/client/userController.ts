import { Request, Response } from "express";
import BaseController from "./baseController";
import userService from "../../services/userService";

class userController extends BaseController {

    public constructor() {
        super();
    }

    public async profile(req: Request, res: Response): Promise <any> {
        const user = await userService.findId(req.user.id);

        return this.resultResponse(res, user);
    }

    public async update(req: Request, res: Response): Promise<any> {
        const isUpdate = await userService.update(req.user.id, req.body);
        
        return this.resultResponse(res, isUpdate);
    }
}

export default new userController();