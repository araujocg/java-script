const mongoose = require('mongoose');

// config mongoose
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/mongo", {
    useMongoClient: true
})
    .then(() => {
        console.log("Conected");
    })
    .catch((err) => {
        console.log("ERROR:" + err);
    });
// model

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    surname: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },
    country: {
        type: String
    }
});

mongoose.model('users', UserSchema);



const User = mongoose.model('users');
new User({
    name: 'Bartolomeu',
    surname: 'Almeida',
    email: 'Batolas123@gmail.com',
    age: 42,
    country: 'Portugal'
})
    .save()
    .then(() => {
        console.log("User created");
    })
    .catch((err) => {
        console.log("ERROR" + err);
    })