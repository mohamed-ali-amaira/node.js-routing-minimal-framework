// I hope the code is self explanetory cuze I am fed up

const Scorpion = require("../scorpion");

const app = new Scorpion();

app.get("/",(req,res)=>{
    return res.end("hello world");
});

app.listen(4000,function(){
    console.log("server running on the port 4000");
});

// to test it go to http://localhost:4000 (just open it with google chrome / firefox ...)
// or type curl http://localhost:4000 in the command line (linux & mac)