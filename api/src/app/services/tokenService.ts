import Service from "./service";
import IUSer from "../interfaces/IUser";
import { ITokenJwt } from "../interfaces/ITokenJwt";
import { COMMON } from "../constants/common";
import tokenRepository from "../repositories/tokenRepository";
import * as jwt from 'jsonwebtoken';

class TokenService extends Service {

    public async createToken(user: IUSer, expiresIn: number): Promise<any> {
    
        const dataStoredInToken = {
            id: user._id,
            email: user.email
        } as ITokenJWT;
        
        return jwt.sign(dataStoredInToken, process.env.JWT_SECRET, { expiresIn });
    }

    public async createRefreshToken(user: IUSer, expiredsin: number): Promise<any> {
        const refreshToken = await this.createToken(user, expiredsin);
        const isCreate = await tokenRepository.create({ token: refreshToken, effetive_time: expiredsin});
        
        if (isCreate) {
            return refreshToken;
        }
        return false;
    }

    public async verifyToken(token: string): Promise<any> {
        return jwt.verify(token, process.env.JWT_SECRET) as ITokenJwt
    }

    public async verifyRefreshToken(token: string): Promise<any> {
        

        try {
            const object = await tokenRepository.findOne({ token: token });
            const verifyToken = await this.verifyToken(object.token);
            
            if (!verifyToken) {
                throw new Error();
            }

            const accessToken = await this.createToken(verifyToken, COMMON.expiresin_access_token);

            return this.successResponse("Create access token success", {accessToken});
        } catch(e) {
            return this.failResponse("Refresh token not valid");
        }
    }
}

export default new TokenService();