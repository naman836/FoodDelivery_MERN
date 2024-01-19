const express = require('express')
const app = express()
const port = 5000 || process.env.PORT
const mongoDB = require("./db")
const path = require("path");
mongoDB();
const cors = require("cors");
app.use(cors());
app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","https://foodexpress-nine.vercel.app/");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
}) 
var filePath = "../build/index.html"
var resolvedPath = path.resolve(filePath);


// app.use(express.static(path.join(__dirname, "../build")));
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname,resolvedPath), function (err) {
//     if (err) {
//       res.status(500).send(err);
//     }
//   });
// });
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
