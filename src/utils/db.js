const  mongoose = require('mongoose');

const uri = "mongodb+srv://firas:firas@cluster0.t3gcv.mongodb.net/patesserie?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
    console.log('MongoDB Connected');
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
