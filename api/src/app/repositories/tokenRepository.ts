import Token from "../models/token";
import Repository from "./repository";
import IToken from "../interfaces/IToken";


class TokenRepository extends Repository<IToken> {
    public constructor() {
        super(Token);
    }
 
}

export default new TokenRepository();