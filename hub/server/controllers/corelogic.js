var http = require('http')
// var site = mongoose.model('Site')

var data = [
  {_id: "london", ip: "192.168.1.61", port: "8000", int: 1},
  {_id: "newyork", ip: "192.168.1.62", port: "8000", int: 2},
  {_id: "hongkong", ip: "192.168.1.131", port: "8000", int: 3}
]

// Site.find({}, function(err, dbclone){
//   if(err){
//     console.log(err)
//   }
//   else{
//     data = dbclone
    console.log("Database Cached")
//   }
// })

// Server boots, a key of nxtchk is created with a dateboject with its next time to run
var boottime = new Date().getTime()
for(var i = 0; i < data.length; i++){
  data[i].nxtchk = new Date(boottime + (data[i].int * 60000))

  // console.log(data[i].nxtchk.getTime())
  // console.log(data[i].nxtchk.toLocaleTimeString())
}

setTimeout(function(){
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
      console.log("If Successful")
      console.log("http://" + data[0].ip + ":" + data[0].port)
      http.get("http://" + data[0].ip + ":" + data[0].port, function(res){
          res.on('data', function(info){
            console.log("Site:",data[0]._id,"Result:",JSON.parse(info))
          }).on('error', function(err){
            console.log(err.message)
          })
        })
      data[0].nxtchk = new Date(data[0].nxtchk.getTime() + (data[0].int * 60000))
    }
  }
},5000)

// Does data keep updating when exported?
// module.exports = {
//   cache:data
// }
