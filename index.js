const http = require('http');
const data = require('./data');


http.createServer((req,resp) => {
    resp.writeHead(200,{'content-Type' : 'application\json'});
    resp.write(JSON.stringify(data));
    resp.end();

}).listen(8000);

//console.log(process.argv[2]);
/*
const fs = require('fs'); //requireing file system module

const input = process.argv;  // taking process argv 
//fs.writeFileSync(input[2], input[3]); //writeing file sync input 2 would create one file and input 3 would write text in that file

if(input[2] =='add'){
    fs.writeFileSync(input[2], input[3]);
}
else if(input[2] == 'remove')
{
    fs.unlinkSync(input[3])
}
else{
    console.log("invalid input");
}
*/






