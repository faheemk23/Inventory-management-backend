const mongoose = require("mongoose")

const baseURL = process.env.MONGO_URI

const database = "assignmentEighteen"

const mongoURI = baseURL + database + "?retryWrites=true&w=majority"

const connectToMongo = async () => {

  if (!baseURL) {
    console.log("environment variable not present!")
    return
  }

  try {

    const res =await mongoose.connect(mongoURI)

    if (res) {
      console.log("connected to database successfully!")
    }
  } catch (e) {
    console.error("error connecting to database", e)
  }
}

module.exports = connectToMongo