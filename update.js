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

async function update(id) {
    const user = await User.findOneAndUpdate({ _id: id }, {
        $set: {
            age: 72
        }
    }, { new: true,
         useFindAndModify: false });
    console.log(user);
    mongoose.connection.close();
}

async function updateMany(id) {
    const user = await User.updateMany({ email: 'test@test.com' }, {
        $set: {
            age: 72
        }
    });
    console.log(user);
    mongoose.connection.close();
}
 
update("5f0d8f4931ac8d4d7aae756b");
//updateMany();


