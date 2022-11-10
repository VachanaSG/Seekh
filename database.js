const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema= new Schema({
    name: {
        type : String,
        required:true
    },
    age: {
        type : Array,
        required : true
    },
    gender: {
        type :String,
        required : true
    },
    phone_no:{
        type: Array,
        required: true
    },
    email_id:{
          type: String,
          required: false
    },
    password:{
        type:String,
        required :true
    },
    ID: {
          type: String,
          required: true
    
   },
    role: {

        type:String,
        required:true
    
    },
    Scan:
      {
          type:Buffer,
          required:false

    },
    Report:
     {
          type:Buffer,
          required:false
     },
     Prescription:
     {
         type:Buffer,
         required:false
     },
     misc:
     {
         type:Buffer,
         required: false
     }

     }, {timestamps:true});

    const Record = mongoose.model('record',blogSchema);
    module.exports=Record;
