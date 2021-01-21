const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const listSchema = new Schema({
  list:{
         type: Array,
      default: []
    },
     
});


module.exports = mongoose.model('list', listSchema);

