require('dotenv').config()

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//process.env.MONGO_URI = 'mongodb://127.0.0.1/testdb';

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('You are now connected to Mongo!'))
    .catch(err => console.log('Something went wrong', err))

const personSchema = new Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String]
});

const Person = mongoose.model("Person", personSchema);

const userSchema = new Schema({
  email: { type: String, required: true },
  firstName: String,
  lastName: String,
  age: Number
});

const User = mongoose.model("User", userSchema);

async function getPersons() {
    const persons = await Person.find({favoriteFoods: 'wine'});
    console.log(persons);
    mongoose.connection.close();
}

async function read() {
  const result = await User.find();
  console.log(result);
  mongoose.connection.close();
}
 
//getPersons();
read();


