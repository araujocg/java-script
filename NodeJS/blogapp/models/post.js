const mongoose = require("mongoose");
const { redirect } = require("react-router-dom");

const postSchema = mongoose.Schema({
    title: { type: String, required: true },
    slug: { type: String, required: true },
    description: { type: String, required: true},
    content: { type: String, required: true},
    category: { type: Schema.type.ObjectId, ref: "category", required: true},
    date: { type: Date, default: Date.now() }
});

const Post = mongoose.model('post', postSchema);

