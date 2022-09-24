const express = require("express");
const app = express();
const PORT = process.env.PORT || (3000 || '3000');
const router = require("./routes/index")


// Load Template Engine
app.set("view engine","ejs")

// Load Routes
app.use("/",router)

app.listen(PORT,() => {
    console.log(`Listening to http://localhost:${PORT}`)
})
