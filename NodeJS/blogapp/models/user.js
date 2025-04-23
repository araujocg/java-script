const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
});

const User = mongoose.model('user', userSchema);

const createNewUser = async(name, email, password) => {
    try{
        const newUser = new User({
            name: name,
            email: email,
            password: password
        });

        const result = await newUser.save();

    }catch(err){
        throw err; // /Lança o erro para ser tratado na chamada
    }
}

module.exports = {createNewUser};

