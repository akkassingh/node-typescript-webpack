import { Server } from './Server/Server';

class Launcher {

    // Classes have variables, constructor and methods

    //NOTE: Clean code Practise says: Each class should have only one Role, This means if we want another logic we should put it in another class 

    //instance variables
    private name: String | undefined;
    private server: Server;

    constructor(){
        this.server = new Server();
    }

    public launchApp(){
        console.log('started app');
        this.server.createServer();
    }

}

new Launcher().launchApp();