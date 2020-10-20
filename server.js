const express = require("express");
const app = express();
const mongoose  = require("mongoose");
const ShortUrl = require("./models/shortUrl");
mongoose.connect("mongodb://localhost/urlShortener",{
    useNewUrlParser : true, useUnifiedTopology:true
})
PORT = 5000 || process.env.PORT;
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false}))


app.get("/", async(req,res)=>{
    const shortUrls = await ShortUrl.find();
    res.render("index", {shortUrls: shortUrls});
});
app.post("/shortUrls", async(req,res)=>{

await ShortUrl.create({ full: req.body.fullUrl})
res.redirect("/");
})

app.get("/:shortUrl", async(req,res)=>{
    const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl });
    if(shortUrl === null) return res.sendStatus(404);
    shortUrl.clicks++;
    shortUrl.save();
    res.redirect(shortUrl.full);
})

app.listen(PORT, (req,res)=>{
    console.log("Server is up and running on PORT: 5000..\n");
})