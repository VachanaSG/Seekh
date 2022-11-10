const express = require('express');
const app = express();
const bcrypt=require('bcrypt');
const mongoose = require('mongoose'); 

const crypto=require('crypto');

const bodyParser= require('body-parser');

app.listen(3000,()  =>{
    console.log("running at 3000 port");
});


//database connectivity for patient

 mongoose.connect('mongodb+srv://me1:you1@cluster0.qhoark3.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true,   useUnifiedTopology: true },
 
 function(error){
    
     if (error){
 
         console.log("Error in connecting database ",error);
 
     }else{
 
         console.log("Connected to the database");
         
 
 
     }
    });  



    
app.set('view engine','ejs'); 
app.set('views','C:/Users/PROJECT/views');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

console.log("hiout");

app.get('/',(req,res)  => {
    console.log("hi0");
    res.render('C:/Users/PROJECT/views/signin.ejs',{title: 'Welcome'});
   
 
});

app.post('/',(req,res) => {
    console.log("hi0");
    if(req.body.role=="NEPEducator")
    {
        res.redirect('/signindoc');
    }
    if(req.body.role=="Student")
    {
        res.redirect('/signinpat');
    }


});

app.get('/signindoc' , (req,res)  => {
    console.log("higetsignindoc");
res.render('signindoc',{title: 'SignIn:Educator'});


});


 

app.post('/signindoc', async (req,res)  => {


   

    console.log("hipostsignindoc");
    

 
        const salt= await bcrypt.genSalt();
        console.log(salt);

        const hashedPassword = await bcrypt.hash(req.body.password,salt);
        req.body.password=hashedPassword;

        console.log(hashedPassword);
        
        const Recordd = require('C:/Users/PROJECT/databasedoc.js');
        const record = new Recordd(req.body);
        

        record.save()

        .then((result )=> {
                             console.log("HHII");
                             res.redirect('/logindoc');
                             console.log("done ");
                            })

        .catch(err =>    {
                             console.log(err);
                         });
 

});

app.get('/signinpat' , (req,res)  => {
    console.log("higetsigninpat");
res.render('signinpat',{title: 'SignIn:Student'});


});
 
app.post('/signinpat', async (req,res)  => {


   

    console.log("hipostsigninpat");
    

 
        const salt= await bcrypt.genSalt();
        console.log(salt);

        const hashedPassword = await bcrypt.hash(req.body.password,salt);
        req.body.password=hashedPassword;

        console.log(hashedPassword);
        
        const Recordp = require('C:/Users/PROJECT/databasepat.js');
        const record = new Recordp(req.body);
        

        record.save()

        .then((result )=> {
                             console.log("HHII");
                             res.redirect('/login');
                             console.log("done");
                            })

        .catch(err =>    {
                             console.log(err);
                         });
 

});


app.get('/logindoc', (req,res) => {
    console.log("higetlogindoc");
    res.render('logindoc',{title: 'Login:Educator'});

   
    
});

app.post('/logindoc', async (req,res) => {


    console.log("hipostlogindoc");

    const Record= require('C:/Users/PROJECT/databasedoc.js');
    const record = new Record(req.body);

    
    try {
         const email=req.body.email_id;
         var password=req.body.password;
         console.log("hello1");
         console.log("hi="+ email);
        console.log(password);

         const usermail= await Record.findOne({email_id:email});
         if(usermail!=undefined)
          {
            console.log(usermail);
            console.log("hello");
            var judge= await (bcrypt.compare(password,usermail.password));
            console.log(judge);
             if(judge===true)
             {

                console.log("permitted")

                 
                
                res.redirect('/home');   
                 console.log("hi")

                 

              }
             else
              {
               res.send("Data incorrect");;
               console.log("not permitted");

             }
         }
         else{ console.log("shit");}
         
        }
        catch
        {
            console.log("some error");
        }
         
         
});

app.get('/loginpat', (req,res) => {
    console.log("higetloginpat");
    res.render('loginpat',{title: 'Login:Student'});

   
    
});

app.post('/loginpat', async (req,res) => {


    console.log("hipostloginpat");

    const Record = require('C:/Users/PROJECT/databasepat.js');
    const record = new Record(req.body);

    
    try {
         const email=req.body.email_id;
         var password=req.body.password;
         console.log("hello1");
         console.log("hi="+ email);
        console.log(password);

         const usermail= await Record.findOne({email_id:email});
         if(usermail!=undefined)
          {
            console.log(usermail);
            console.log("hello");
            var judge= await (bcrypt.compare(password,usermail.password));
            console.log(judge);
             if(judge===true)
             {

                console.log("permitted")

                 
                
                res.redirect('/common');   
                 console.log("hi")

                 

              }
             else
              {
               res.send("Data incorrect");;
               console.log("not permitted");

             }
         }
         else{ console.log("shit");}
         
        }
        catch
        {
            console.log("some error");
        }
         
         
});





app.get('/home',(req,res) => {
    res.render('C:/Users/PROJECT/views/home.ejs',{title:'home'});


});
app.get('/common',(req,res) => {
    res.render('C:/Users/PROJECT/views/common.ejs',{title:'home'});


});


 
//app.post('/home', (req,res) =>{ 

   //// console.log("hiposthome");

   // const Record= require('C:/Users/naidila/OneDrive/Desktop/Naidila/PROJECT/databasedoc.js');
    //const record = new Record(req.body);
   // console.log("hey");
     //var doctor=req.body.Form;
  //  Record.findAll({name:doctor})



//});

