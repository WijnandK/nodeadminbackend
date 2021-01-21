const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const carSchema = new Schema({
     carId:{
        type:Number,
    },
    rides: {
      type: Array,
      default: []
    }
});

module.exports = mongoose.model('Ride', carSchema);
