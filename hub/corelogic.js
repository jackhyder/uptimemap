var http = require('http'), path = require('path'), datalogic = require(path.join(__dirname,'server/controllers/datalogic.js'))
var data = datalogic.data
// var site = mongoose.model('Site')

// Poll test
// for (var i = 0; i < data.length; i++){
//   http.get("http://" + data[i].ip + ":" + data[i].port, function(res){
//       res.on('data', function(info){
//         // why doesnt data[i] work?
//         console.log(JSON.parse(info))
//       })
//   }).on('error', function(err){
//     console.log({result: 'failure'})
//   }).end()
// }

console.log("Core Logic Running")
// Info poller runs
while (true) {
  // Check  current time
  var currenttime = new Date()
  // Sort data array by earliest next check time first
  data.sort(function(a,b){
    if (a.nxtchk.getTime() > b.nxtchk.getTime()){
        return 1
    }
    if (a.nxtchk.getTime() < b.nxtchk.getTime()){
      return -1
    }
    return 0
  })

  // console.log("Sorted")
  // console.log(data)

// If current time is within a time range of 5 seconds of check time start, poll for data, increment check timer
  if (currenttime.getTime() >= data[0].nxtchk.getTime() && currenttime.getTime() < data[0].nxtchk.getTime() + 5000){
    http.get("http://" + data[0].ip + ":" + data[0].port, function(res){
      // console.log("get ran")
      res.on('data', function(info){
        result = JSON.parse(info)
      })
    }).on('error', function(err){
      result = {result: 'failure'}
    }).end()

    console.log("Timer fired for: http://" + data[0].ip + ":" + data[0].port);
    data[0].nxtchk = new Date(data[0].nxtchk.getTime() + (data[0].int * 60000));
  }
}

// Does data keep updating when exported?
// module.exports = {
//   cache:data
// }
