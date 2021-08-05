import * as mongoose from 'mongoose';
import IUser from "../interfaces/IUser";
 
const userSchema = new mongoose.Schema({
    'email'     : {type: String, required: true},
    'password'  : {type: String, required: true},
    'created_at': {type: Date, required: true, default: Date.now},
    'updated_at': {type: Date, required: true, default: Date.now},
});
 
const userModel = mongoose.model<IUser & mongoose.Document>('users', userSchema);
 
export default userModel;