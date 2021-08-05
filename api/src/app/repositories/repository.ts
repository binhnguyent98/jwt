import IBaseSchema from "../models/schema";


abstract class Repository<T extends IBaseSchema> {
    public readonly _model: any
    
    public constructor(model: any) {
        this._model = model;
    }

    public async create(data: T): Promise<any> {
        const newData = this.handleTimestamp(data, false);
        const create = new this._model(newData);

        const validatedModel = create.validateSync()
        if(!!validatedModel) return {};
        create.save();
        
        return create;
    }


    private handleTimestamp(data: T, isUpdate: boolean): T {
        const newData = {...data} as any;

        if (isUpdate) {
            newData.updated_at = Date.now()
        }else {
            newData.created_at = Date.now();
            newData.updated_at = Date.now();
        }
        
        return newData as T;
    }

    public async find(filter?: any): Promise<T> {
        const data =  this._model.find(filter);
    
        return data as T;
    }

    public async findOne(filter? : any): Promise<T> {
        const data =  this._model.findOne(filter);
    
        return data as T; 
    }

    public async update(id: string, data: T): Promise<T> {
        const item = this.handleTimestamp(data, true);
        return this._model.update({_id: id}, { $set: item })

    }
}

export default Repository;