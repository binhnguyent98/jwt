import User from "../models/user";
import IUser from "../interfaces/IUser";
import Repository from "./repository";
import * as bcrypt from 'bcrypt';



class UserRepository extends Repository<IUser> {
    public constructor() {
        super(User);
    }
    
    public async createUser(userData: any): Promise<any> {
        const user: IUser = {} as IUser;
        user.email      = userData.email;
        user.password   = await bcrypt.hash(userData.password, 10);
    
        return this.create(user);
    }
}

export default new UserRepository();