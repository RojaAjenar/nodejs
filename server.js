/*const os=require("os");
let result=os.arch();
let result1=os.cpus();
let result2=os.freemem();
let result3=os.homedir();
let result4=os.hostname();
let result5=os.networkInterfaces();
let result6=os.endianness();
let result7=os.userInfo();
let result8=os.type();
let result9=os.uptime();

console.log(result);
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
console.log(result6);
console.log(result7);
console.log(result8);
console.log(result9);*/
/*
const fs=require("fs");
let readme=fs.readFileSync("./readme.txt","utf8");//read file
console.log(readme)
fs.writeFileSync("./writeme.txt");// write file
console.log(readme)
fs.unlinkSync("./writeme.txt");//deleting
console.log(readme)*/
//asynch used using call back funcation
/*
const fs=require("fs");
let readme=fs.readFile("./readme.txt","utf8",(err,data)=>{
    if(err){
        Console.log(err)
    }
     else{
         fs.writeFile("./writeme.txt",data,(err)=>{
             if(err) throw err;
             else{
                 console.log(data)
             }
         })
     }
});
console.log(readme)*/
//create directiry
/*
const fs=require("fs");//first step is loading module

fs.mkdirSync("fullstack");//creat a dir
fs.rmdirSync("fullstack");//remove a dir*/

//ashy dir
/*
const fs=require("fs");
fs.mkdir("nodejs",()=>{
    fs.readFile('./readme.txt','utf8',(err,data)=>{
        if(err) throw err;
        fs.writeFile("./nodejs/fullstack.txt",data,err=>{
            if(err) console.log(err);
        });
    });

});*/
//remove the dir
/*const fs=require("fs");
fs.unlink("./nodejs/fullstack.txt",()=>{
    fs.rmdir("nodejs",err=>{
        if(err) throw err;
    });
});*/
/*
const fs=require("fs");
let readFile=fs.createReadStream(__dirname + "./readme.txt","utf8");
readFile.on("data",(err,chunk)=>{
    if(err){
console.log(err);
    }
    else{
        console.log(chunk);
    }
    
})*/
//creat API
/*
const fs=require("fs");
const http=require("http");

const server=http.createServer((req,res)=>{
    console.log(req.url);
    res.writeHead(200,{"content-Type":"applicaton/json"});
   // res.writeHead(200,{"Content-Type":"text/html"});
 //   const readHtml=fs.createReadStream(__dirname+"/index.html","utf8");
  //  readHtml.pipe(res);

*/
var user=[{
     name :'rooja',
     age : 20,
},{
    name :'rooja',
    age : 20,
}];
res.end(JSON.stringify(user));


const port=5000;
server.listen(port,err=>{
    if(err) throw err;
    console.log(`app is running on ${port}`)
});

/*
const fs=require("fs");
const http=require("http");

const server=http.createServer((req,res)=>{
    //basic routing
    if(req.url==="/home" || req.url==="/"){
        res.writeHead(200,{"content-Type":"text/html"});
        fs.createReadStream(__dirname+"/index.html","utf8").pipe(res);
    }
      else if(res.url === "/login"){
          res.writeHead(200,{"content-type":"text/html"});  
      
    fs.createReadStream(__dirname+"/login.html","utf8").pipe(res);
      }
      else {
          res.writeHead(404,{"content-Type":"text/html"});
          fs.createReadStream(__dirname+'/pagenotfound.html',"utf8").pipe(res)
      }
      
    });
    const port=process.env.PORT || 5000;
    server.listen(port,err =>{
        if(err) throw err;
        console.log(`server is running on ${port}`)
    })*/
/*
    const mongodb=require('mongodb').MongoClient;//local mangodb module
    const localMongodbUrl="mongodb://localhost:27017";
    const cloudMongodbUrl="mongodb+srv://Rojamr:959193635@cluster0-laacz.mongodb.net/test?retryWrites=true&w=majority "
    //connect mangodb database or connection
    mongodb
    .connect(cloudMongodbUrl,{useUnifiedTopology:true},(err,db)=>{
        if(err) throw err;
        //creating dbnames
        const database=db.db("fullstack");
        var emp_data=
            {
               name:"anu" ,
               age:20,
               company:"testyentra",
               salary:2000,
               designation:"web",
               doj:new Date().toString(),
               location:"mandya"
            };
        database.collection('emp_data').insertOne(emp_data,(err,data)=>{
            if(err) throw err;
            console.log("collection connected");
        });
    })
    
*/

