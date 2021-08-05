class Service {
    
    public successResponse(message?:string, data?: any | IServiceResponse): IServiceResponse {
        return {
            status: true,
            message: message,
            data: data
        }
    }

    public failResponse(message?:string, data?: any | IServiceResponse): IServiceResponse {
        return {
            status: false,
            message: message,
            data: data
        }
    }
}

export default Service;

export interface IServiceResponse {
    status?: boolean;
    message?: string;
    data?: any
}