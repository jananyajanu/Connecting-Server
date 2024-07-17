const http = require("http");
const port = 8081;// local port number

const toDoList=["learn","apply", "things","succed"];

http
    .createServer((req,res) => {
    const {method,url}=req;
    // console.log(method,url);
    if (url === "/todos"){
        if (method === "GET"){
            res.writeHead(200,{"content-Type":"text/html"});
            res.write(toDoList.toString());
        }else if(method ==="POST"){
            let body="";
            req.on('error',(err) => {
                console.log(err)
            }).on('data',(chunk)=>{
                body += chunk;
                // console.log(chunk);
            }).on('end',()=>{
                body = JSON.parse(body);
                let newToDo=toDoList;
                newToDo.push(body.item);
                console.log(newToDo);
                // console.log('data:',body);
            })
        } else if(method === "DELETE"){
            let body="";
            req
            .on ("error",(err) => {
                console.log(err);
            })
            .on ("data",(chunk)=>{
                body +=chunk;
            })
            .on("end",()=>{
                body = JSON.parse(body);

                let deleteThisItem = body.item;

                for(let i=0;i<=toDoList.length;i++){
                    if (toDoList[i] === deleteThisItem) {
                        toDoList.splice(i,1);
                        break;
                    }else{
                        console.error("Error: Match Not  Found!!");
                        break;
                    }
                    }
            });
        }
        
        
        else{
            res.writeHead(501);

        }
    }else{
        res.writeHead(404);
    }
    // res.writeHead(200,{"content-Type":"text/html"});
    // res.write("<h2>Hey server started:-)</h2>");
    res.end();
})
.listen(port,()=>{ //call back function
    console.log('Node Js Server Sarted Running on port ');
});