const express = require('express');
const app = express();
const mongoose = require('mongoose'); 
const multer =require('multer');
const path =require('path');
const File=require('C:/Users/naidila/OneDrive/Desktop/Naidila/PROJECT/filesharing/filesharingmongo.js');
const { v4: uuidv4 } = require('uuid');




let storage= multer.diskStorage({
    destination:(req,file,cb)  =>cb(null,'C:/Users/naidila/OneDrive/Desktop/Naidila/PROJECT/uploads/'),
    filename: (req,file,cb) =>{

        const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1E9)}${path.extname(file.originalname)}`;
        cb(null, uniqueName);
    }
});

let upload = multer({ storage, limits:{ fileSize: 1000000 * 100 }, }).single('SHARE'); 


app.listen(8000,()  =>{
    console.log("running at 4000 port");
});

mongoose.connect('mongodb+srv://me1:you1@cluster0.zngsl.mongodb.net/database?retryWrites=true&w=majority', {useNewUrlParser: true,   useUnifiedTopology: true },
 
function(error){
   
    if (error){

        console.log("Error in connecting databasepatient: ",error);

    }else{

        console.log("Connected to the databasepatient");
        


    }
   });


   app.get('/share',(req,res)  => {

    res.render('C:/Users/naidila/OneDrive/Desktop/Naidila/PROJECT/filesharing/home.ejs',{title: 'SHARE'});
   }
   );

   app.post('/share',(req,res)  => {

    upload(req, res, async (err) => {
        if (err) {
          return res.status(500).send({ error: err.message });
        }
          const file = new File({
              filename: req.file.filename,
              uuid: uuidv4(),
              path: req.file.path,
              size: req.file.size
          });
          const response = await file.save();
          res.json({ file: `${process.env.APP_BASE_URL}/Files/${response.uuid}` });
   });

});