const express = require("express");
const app = express();
require("./db/conn");
const router = require("./routes/router");
const cors = require("cors");
const port = 8009;
const cookiParser = require("cookie-parser")
// app.get("/",(req,res)=>{
//     res.status(201).json("server created")
// });
app.use(express.json());
app.use(cookiParser());
app.use(cors());
app.use(router)
app.listen(port,()=>{
    console.log(`server start at port no : ${port}`);
})