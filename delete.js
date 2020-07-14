require('dotenv').config()

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//process.env.MONGO_URI = 'mongodb://127.0.0.1/testdb';

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('You are now connected to Mongo!'))
    .catch(err => console.log('Something went wrong', err))

const userSchema = new Schema({
    email: { type: String, required: true },
    firstName: String,
    lastName: String,
    age: Number
  });
  
  const User = mongoose.model("User", userSchema);

async function del() {
    const result = await User.deleteMany({ email: "test@test.com" });
    //const result = await User.deleteOne({ email: "test@test.com" });
    console.log(result);
    mongoose.connection.close();
}
    
del();


