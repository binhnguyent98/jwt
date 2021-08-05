export interface IDataResponse {
    status_code?: number;
    message?: string;
    data?: {
        [key: string]: any;
    };
}