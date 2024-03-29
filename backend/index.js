const express = require('express')
const app = express()
const port = 5000 || process.env.PORT
const mongoDB = require("./db")
const path = require("path");
mongoDB();
const cors = require("cors"); 
app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://foodexpress-naman.vercel.app");
  next();
});
app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","https://foodexpress-naman.vercel.app");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
}) 

app.get('/', (req, res) => {
  res.status(200).json('Hello World!---------')
})
app.use(express.json())
app.use('/api', require("./Routes/CreateUser"));
app.use('/api', require("./Routes/DisplayData")); 
app.use('/api', require("./Routes/OrderData"));
 


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
