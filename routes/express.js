const http = require("http");
const express=require("express")
const body_parser=require("body-parser")
const adminData=require("./routes/admin")
const shop=require("./routes/shop")
const path=require("path")
const app= express();
app.set('view engine','pug')

app.use(express.static(path.join(__dirname,"public")))


app.use(body_parser.urlencoded({extended:false}))

app.use("/admin",adminData.routes);
app.use(shop);


app.use("/",(req,res,next)=>{
  res.status(404).sendFile(path.join(__dirname,"views","pageNotFound.html"))
})

app.listen(4000,()=>{
        console.log("Listening on post number 4000")
})
