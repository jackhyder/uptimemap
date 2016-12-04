// var site = mongoose.model('Site')
module.exports = (function(){
  return{
    data:[
      {_id: "london", ip: "192.168.1.61", port: "8000", int: .25},
      {_id: "newyork", ip: "192.168.1.62", port: "8000", int: .5},
      {_id: "hongkong", ip: "192.168.1.131", port: "8000", int: .75}
    ]
  }
})();

// Site.find({}, function(err, dbclone){
//   if(err){
//     console.log(err)
//   }
//   else{
//     module.exports.data = dbclone
    console.log("Database Cached")
//   }
// })

// Server boots, a key of nxtchk is created with a dateboject with its next time to run
var boottime = new Date().getTime()
for(var i = 0; i < module.exports.data.length; i++){
  module.exports.data[i].nxtchk = new Date(boottime + (module.exports.data[i].int * 60000))

// console.log(data[i].nxtchk.getTime())
// console.log(data[i].nxtchk.toLocaleTimeString())
}

// data for corelogic
