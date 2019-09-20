const http = require('http');
const colors = require ('colors');
const language= require ('language-translator');



    console.log("Escribe tu nombre");
    const Carlos = process.openStdin();
    
    Carlos.addListener("data", function(d) {
        console.log('HOLA ' + 
            d.toString().trim());
        console.log('Hi ' + 
            d.toString().trim());
      });



const handleServer = function (req, res){
res.writeHead(200,{'Content-type': 'text/html'});
res.write(Carlos);
res.end();
}
const server = http.createServer(handleServer);

server.listen(3000,function(){
console.log('servidor En El Puerto 3000'.green);
});