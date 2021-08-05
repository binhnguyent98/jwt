import { Response } from "express";
import { IDataResponse } from "../interfaces/IDataResponse";
import httpStatusCode from "http-status-codes";
import { IServiceResponse } from "../services/service";

export const responseData = ( res: Response, data: IDataResponse ): object => {
    const newData = {} as IDataResponse;
    const statusCode = data.status_code || httpStatusCode.BAD_REQUEST;

    newData.status_code = statusCode
    newData.message     = data.message || "";
    newData.data        = data.data || {};

    return res.status(statusCode).send(newData);
}


export const buildSuccessResponse = (res: Response, dataResponse?: IServiceResponse | undefined): object => {
    const newResponse = dataResponse as IDataResponse;
    newResponse.status_code = httpStatusCode.OK;

    return responseData(res, newResponse);
}

export const buildFailResponse = (res: Response, dataResponse?: IServiceResponse | undefined): object => {
    const newResponse = dataResponse as IDataResponse;
    newResponse.status_code = httpStatusCode.BAD_REQUEST;

    return responseData(res, newResponse);
}

export const buildUnauthorizedResponse = (res: Response, dataResponse?: IDataResponse | undefined): object => {
    const newResponse       = dataResponse as IDataResponse;
    newResponse.status_code = httpStatusCode.UNAUTHORIZED;
    newResponse.message     = dataResponse?.message || "Unauthorized";

    return responseData(res, newResponse);
}

