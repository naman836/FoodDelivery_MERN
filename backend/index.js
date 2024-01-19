const express = require('express')
const app = express()
const port = 5000 || process.env.port
const mongoDB = require("./db")
mongoDB();

app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","https://foodexpress-nine.vercel.app/");
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
