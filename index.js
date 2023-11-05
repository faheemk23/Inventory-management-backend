const express = require('express');
const app = express();
const cors=require("cors")

const connectToMongo=require("./db")

connectToMongo()

app.use(express.json())

app.use(cors())

// Add your routes here

app.get("/", (req, res) => res.send("Hey there, stranger!"))

app.use((err,req,res,next)=>{
  console.error(err.stack)
  res.status(500).json({error:"Something went wrong!"})
})

const PORT=process.env.PORT ?? 3000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});