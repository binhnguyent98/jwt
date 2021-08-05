import autoBind from "auto-bind";
import { Response } from "express";
import { IDataResponse } from "../../interfaces/IDataResponse"
import { buildSuccessResponse, buildFailResponse, buildUnauthorizedResponse } from "../../utils/responseUtils";
import { IServiceResponse } from "../../services/service"

class BaseController {
    
    public constructor() {
        autoBind(this);
    }

    public succesResponse(res: Response, dataResponse?: IServiceResponse | undefined): any {
        return buildSuccessResponse(res, dataResponse);
    }

    public failResponse(res: Response, dataResponse?: IServiceResponse | undefined): any {
        return buildFailResponse(res, dataResponse);
    }

    public unauthorizedResponse(res: Response, dataResponse?: IDataResponse | undefined): any {
        return buildUnauthorizedResponse(res, dataResponse);
    }

    public resultResponse(res: Response, result?: IServiceResponse): any {
        if (!result?.status) {
            return this.failResponse(res, result);    
        }
    
        return this.succesResponse(res, result);
    }

}

export default BaseController;