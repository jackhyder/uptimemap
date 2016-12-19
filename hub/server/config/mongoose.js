var mongoose = require('mongoose'), path = require('path'), fs = require('fs');
var models_path = path.join(__dirname, '../models');
mongoose.connect('mongodb://localhost/sites');

fs.readdirSync(models_path).forEach(function(file){
  if (file.indexOf('.js') >= 0){
    require(models_path + '/' + file);
  }
})
