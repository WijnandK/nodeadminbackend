const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const personSchema = new Schema({
  name:{
        type:String,
        required: true
    },
    note: {
      type: String 
    }
});


module.exports = mongoose.model('person', personSchema);


  //    number: { type: String, required: true },

  // rides: [{ type: mongoose.Types.ObjectId, required: true, ref: 'Place' }]