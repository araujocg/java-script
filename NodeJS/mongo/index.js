const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/mongo")
    .then(()=>{
        console.log("Conected");
    })
    .catch((err)=>{
        console.log("ERROR:" + err);
    })