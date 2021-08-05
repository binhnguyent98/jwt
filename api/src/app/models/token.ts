import * as mongoose from 'mongoose';
import IUser from "../interfaces/IUser";
 
const userSchema = new mongoose.Schema({
    'token'     : {type: String, required: true},
    'effetive_time' : {type: Number, required: true},
    'created_at': {type: Date, required: true, default: Date.now},
    'updated_at': {type: Date, required: true, default: Date.now},
});
 
const userModel = mongoose.model<IUser & mongoose.Document>('tokens', userSchema);
 
export default userModel;