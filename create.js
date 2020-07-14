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

const arrayOfUsers = [
    {email: "test2@test.com", firstName: "test2", lastName: "test3", age: 34},
    {email: "test3@test.com", firstName: "test3", lastName: "test4", age: 35},
    {email: "test4@test.com", firstName: "test4", lastName: "test5", age: 36}
  ];
  
async function createMany(arrayOfUsers) {
    const result = await User.insertMany(arrayOfUsers);
    console.log(result);
    mongoose.connection.close();
};

async function create() {
  
  const user = new User({email: "test@test.com", firstName: "test", lastName: "test2", age: 33});

  const result = await user.save();
  console.log(result);
  mongoose.connection.close();
};

//createMany(arrayOfUsers);
create();

