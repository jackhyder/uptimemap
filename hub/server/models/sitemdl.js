var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SiteSchema = new mongoose.Schema(
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
    },
    port: {
      type:Number,
      required: true
    },
    lat: {
      type:Number,
    //   required: true
    },
    long: {
      type:Number,
    //   required: true
    },
    status: {
      type:String,
    //   required: true
    }
  },
    {timestamps: true}
)
mongoose.model('Site', SiteSchema);
