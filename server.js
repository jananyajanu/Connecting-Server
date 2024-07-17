const express = require("express");
const app=express();
app.use(express.json());

const port = 8081;// local port number

const toDoList=["learn","apply", "things","succed"];

app.get("/todos",(req,res) => {
    res.status(200).send(toDoList);
});

app.post("/todos",(req,res) => {
    let newToDoList=req.body.name;
    toDoList.push(newToDoList);
    res.status(201).send({message : "TAsk Added Successfully"});
});

app.delete("/todos",(req,res) => {
    const deleteThisItem=req.body.name;
    toDoList.find((elem,index) => {
        if (elem == deleteThisItem){
            toDoList.splice(index,1);
        }
        res.status(202).send({message : `Deleted item ${req.body.name}`});
    });
});

app.listen(port,()=>{
    console.log(`Node Server started running on port ${port}`);
});