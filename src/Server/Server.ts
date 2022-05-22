import { createServer, IncomingMessage, ServerResponse } from 'http';
import { Authorizer } from '../Authorization/Authorizer';
import { LoginHandler } from './LoginHandler';
import { Utils } from './utils';

export class Server {

    private authorizer: Authorizer = new Authorizer();

    public createServer() {
        createServer(
            async (req: IncomingMessage, res: ServerResponse) => {
                console.log("got req from: ", req.url);
                const basePath = Utils.getUrlBasePath(req.url);

                switch(basePath){
                    case 'login':
                        await new LoginHandler(req, res, this.authorizer).handleRequest();
                        break;
                    
                }
                res.end();
            }
        ).listen(8080)
        console.log("server started")
    }
}