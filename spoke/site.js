var http = require('http');
var port = 8000;

var app = http.createServer(function(req,res){
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ result: 'success' }));
});

app.listen(port,function(){
    console.log("Server running on port",port)
});
