const http = require('http'), path = require('path'), datalogic = require(path.join(__dirname,'server/controllers/datalogic.js'))
var data = datalogic.data

// Polling function
function poll(param){
  if (param.state != "maintenance"){
    var temp
    http.get("http://" + param.ip + ":" + param.port, function(res){
      res.on('data', function(info){
        temp = JSON.parse(info).result
        if (temp != param.state){
          param.state = temp
        }
        console.log(param._id + ":",param.state)
      })
    }).on('error', function(err){
      temp = "offline"
      if (temp != param.state){
        param.state = temp
      }
      console.log(param._id + ":",param.state)
    }).end()
  }
}

// a mongo db is one giant list of dictionaries
for (var locinfo in data){
  setInterval(poll, (data[locinfo].int * 60000), data[locinfo])
}
