const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/social-network",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
).catch(error => console.error("MongoDB connection error:", error));

// Use this to log mongo queries being executed!
mongoose.set("debug", true);

module.exports = mongoose.connection;
