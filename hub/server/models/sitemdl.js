var mongoose = require('mongoose');
var siteSchema = new mongoose.Schema(
{
  location: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  ip: {
    type:String,
    unique: true,
    required: true
  }
},
  {timestamps: true}
)

mongoose.model('Site', siteSchema)
console.log("Full model loaded")
