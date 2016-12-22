var mongoose = require('mongoose'), path = require('path'), datalogic = require(path.join(__dirname,'datalogic.js'));
var site = mongoose.model('Site');
var data = datalogic.data;
var count = 0;
setInterval(function(){
  count +=1;
  console.log("########" + count);
  console.log(
    data.sort(function(a,b){
      if (a.nxtchk.getTime() > b.nxtchk.getTime()){
          return 1
      }
      if (a.nxtchk.getTime() < b.nxtchk.getTime()){
        return -1
      }
      return 0
    })
  );
}, 15000);

module.exports = (function(){
  return{
  }
})();
console.log("Login controller loaded")
