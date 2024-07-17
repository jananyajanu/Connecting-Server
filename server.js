const http = require("http");
const port = 3788;// local port number

const student = {

}
http.createServer((req,res) => {
    res.writeHead(200,{"content-Type":"text/html"});
    res.write("<h2>Hey server started:-)</h2>");
    res.end();
})
.listen(port,()=>{ //call back function
    console.log('Node Js Server Sarted Running on port 3788');
});