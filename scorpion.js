const http = require("http");
/* 
    custom, one man show, minimalistic, 0 dependencies, node.js webserver framework

    I have developed this framework in about 10min so it is not a production level 
    framework like express.js or hapi.js but it a good way to demonstrate the 
    use of OOP programming in js and showcase the node.js http module 
    as well as my skills in using the barebone node.js runtime and the cool js language

*/

class Scorpion {
    constructor(){
        // a place to store the routes with their clbacks
        this.handlers = [];
    };

    // post method handler
    post(url, func){
        this.handlers.push({route : url, method : 'POST', handler : func});
    }
    // get method handler
    get(url,func){
        this.handlers.push({route : url, method : "GET", handler : func });
    }
    // a helper function to create more http methods
    // just fed up after 10min so gave you this method to implement your own
    // PUT DELETE PATCH OPTIONS ... http methods
    createHandler(url, func, method){
        this.handlers.push({route : url, handler : func , method : method});
    }    
    // this function starts the server : asks for the port and a callback
    // to be executed after the server is spinned
    listen(port, func){
        // creating an http server that listens to requests
        const server = http.createServer((req,res)=>{
            // checking if the routes exists & handeling them
            this.handlers.forEach(handler => {
                if(req.url === handler.route && req.method.toLowerCase() === handler.method.toLowerCase()){
                    return handler.handler(req,res);
                }
            });
            // return a 404 if the route is not handled
            res.statusCode = 404;
            return res.end(`cannot ${req.method.toLowerCase()} ${req.url}`);
        });
        // starting the server
        server.listen(port,func);
    }
}
// exporting the scorpion class to be accessible to the outer world
module.exports = Scorpion;

/*

    this framework is just for fun, I didn't even write tests or anything like that for it
    so again do not use this in your next prod app but rather use it 
    as a ressource 

    this framework is impacted by the express framework althoug
    the express.js framework is much more complex and feature rich

    check out the examples folder for some examples


*/