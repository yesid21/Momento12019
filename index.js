const http = require('http');
const colors = require ('colors');
const language= require ('language-translator');



    console.log("Escribe tu nombre");
    const Carlos = process.openStdin();
    
    Carlos.addListener("data", function(d) {
        console.log('HOLA '.green + 
            d.toString().trim());
        console.log('Hello '.red + 
            d.toString().trim());
            console.log('Ola '.blue + 
            d.toString().trim());
            console.log('Hallo '.gray + 
            d.toString().trim());
            console.log('سلام '.yellow + 
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