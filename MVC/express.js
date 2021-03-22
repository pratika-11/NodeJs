const express=require("express")
const body_parser=require("body-parser")
const adminRoutes=require("./routes/admin")
const shop=require("./routes/shop")
const errorController=require("./controllers/error")
const path=require("path")
const app= express();
app.set('view engine','ejs');
app.set('views','views')

app.use(express.static(path.join(__dirname,"public")))
app.use(body_parser.urlencoded({extended:false}))

app.use("/admin",adminRoutes);
app.use(shop);


app.use("/",errorController.get404)



app.listen(4000,()=>{
        console.log("Listening on post number 4000")
})
