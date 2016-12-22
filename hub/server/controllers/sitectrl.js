var mongoose = require('mongoose');
var Site = mongoose.model('Site');

module.exports = (function(){
  return{
      index: function(req, res){
          Site.find({}, function(err, data){
              res.json(data)
          })
      },
      addLocation: function(req, res){
          var site = new Site(req.body)
          site.interval = 5;
          site.save(function(err, site){
              res.json(site);
          })
      }
  }
})();
