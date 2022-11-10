const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const forStrings= {
    type : String,
    required:true
}

const forArrays={
    type : Array,
    required : true
}

const blogSchema= new Schema({
    name:forStrings,
    age: forArrays,
    Institute:forStrings,
    phone_no:forArrays,
    email_id:forStrings,
    password:forStrings,
    ID: forStrings
    }, {timestamps:true});

     

    const Recordd = mongoose.model('nepedu',blogSchema);

    module.exports=Recordd;
