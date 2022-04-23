import { createServer, IncomingMessage, ServerResponse } from 'http';

export class Server {

    public createServer() {
        createServer(
            (req: IncomingMessage, res: ServerResponse) => {
                console.log("got req from: ", req.url);
                res.end();
            }
        ).listen(8080)
        console.log("server started")
    }
}