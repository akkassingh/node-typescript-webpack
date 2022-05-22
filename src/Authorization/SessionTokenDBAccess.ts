import { UserCredentials } from "../Shared/Model";
import Nedb = require('nedb');
import { SessionToken } from "../Server/Model";

export class SessionTokenDBAccess {

    private nedb: Nedb;

    constructor() {
        this.nedb = new Nedb('database/sessionToken.db');
        this.nedb.loadDatabase();
    }

    public async storeSessionToken(token: SessionToken): Promise<void> {
        return new Promise((resolve, reject) => {
            this.nedb.insert(token, (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve()
                }
            })
        });
    }

}