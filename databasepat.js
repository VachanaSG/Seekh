const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const forStrings= {
    type : String,
    required:true
}

const forArrays={
    type : [String],
    bydoc:[String],

    required : false
}

const blogSchema= new Schema({
    name:forStrings,

    age: forStrings,

    Institute: forStrings,

    phone_no:forStrings,

    email_id:forStrings,

    password:forStrings,

    Scan:forArrays,

    Report:forArrays,

     Prescription: forArrays,

     misc: forArrays

     }, {timestamps:true});

     

    const Recordp = mongoose.model('precord',blogSchema);

    module.exports=Recordp;
