import IUSer from "../interfaces/IUser";
import userRepository from "../repositories/userRepository";
import Service from "./service";
import { COMMON } from "../constants/common";
import * as bcrypt from 'bcrypt';
import tokenService from "./tokenService";


class UserService extends Service {

    public async getAll(): Promise<any> {
        const users = await userRepository.find();
       
        return this.successResponse("List users", users);

    }

    public async createUser(userData: IUSer): Promise<any> {
        const currentUser = await userRepository.findOne({ email: userData.email });
       
        if (currentUser) {
            return this.failResponse("Email existed !", [])
        }else {
            await userRepository.createUser(userData);

            return this.successResponse("Register success");
        }
    }

    public async login(email: string, password: string): Promise<any> {
        const user = await userRepository.findOne({ email: email });
        
        if (user) {
            const comparePassword = await bcrypt.compare(password, user.password);
            if (comparePassword) {
                const accessToken = await tokenService.createToken(user, COMMON.expiresin_access_token);
                const refreshToken = await tokenService.createRefreshToken(user, COMMON.expiresin_refresh_token);
               
                return this.successResponse("Login success", {
                    expired_in : COMMON.expiresin_access_token,
                    access_token: accessToken,
                    refresh_token: refreshToken
                });
            }else {
                return this.failResponse("Incorrect password")
            }
        }

        return this.failResponse("Email does not exist !")
    }

    public async findId(id: string): Promise<any> {
        const user = await userRepository.findOne({_id: id});
        return this.successResponse("Profile", user);
    }

    public async update(id: string, userData: IUSer): Promise<any> {
        delete userData.password;
        const update = await userRepository.update(id, userData);
        
        if (update.ok) {
            return this.successResponse("Update successly");
        }else {
            return this.failResponse("Update fail !")
        }
    }
}

export default new UserService();