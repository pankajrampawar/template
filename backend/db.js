const mongoose =require("mongoose");

const mongoURI = "mongodb+srv://user123:user123@cluster0.yc45gbj.mongodb.net/auth";

mongoose.connect(mongoURI); // url parser removed

const db = mongoose.connection;

db.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

db.once("open", () => {
  console.log("Connected to MongoDB");
});

module.exports = db;