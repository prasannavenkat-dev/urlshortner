const express = require('express');

const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))



const dotenv = require('dotenv');
dotenv.config();

const cors = require('cors')
app.use(cors())
const {urlModel} = require('./models/model')

mongoose.connect(process.env.URL)

app.use(express.static('public'))

app.post("/shortUrl",function(req,res){
 let longUrl = req.body.longUrl;

  let urlShort = new urlModel({
      longUrl,
      shortUrl:generateShortUrl(longUrl),
      totalClick:0
  })

  urlShort.save(function(err,data){
      if (err) throw err;
      console.log('success');
  })

  res.redirect('/')

})


app.get('/',async function(req,res){



    res.sendFile(__dirname+'/index.html')
})


app.get('/getInfo',async function(req,res){



let result= await urlModel.find(function(err,data){
    if(err) throw err;
    console.log('success');
})

res.send(result)


})


app.get('/delete/:url',async function(req,res){

let findUrl = req.params.url;


let del = await urlModel.findOneAndDelete({shortUrl:findUrl},function(err,data){

    if(err) throw err;
    console.log('success find ')
})

res.redirect('/')

})




app.get('/:id',async function(req,res){

 let id = req.params.id;
let result = await urlModel.findOne({shortUrl:id},function(err,data){
    if(err) throw err;
    console.log(data);
})

await urlModel.findOneAndUpdate({shortUrl:result.shortUrl},{$inc:{totalClick:1}});
res.redirect(result.longUrl)
    
})







app.listen(process.env.PORT||3000,function(){
    console.log('Server started');
})


function generateShortUrl(longUrl){
 
    
   let result='';
   let charactersList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
   
   
   for(i=0;i<5;i++){
      result+= charactersList.charAt(Math.floor(Math.random()*charactersList.length))
   }

   return result

}