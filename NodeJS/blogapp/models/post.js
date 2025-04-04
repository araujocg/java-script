const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = mongoose.Schema({
    title: { type: String, required: true },
    slug: { type: String, required: true },
    description: { type: String, required: true},
    content: { type: String, required: true},
    category: { type: Schema.Types.ObjectId, ref: "category", required: true },
    date: { type: Date, default: Date.now }
});
const Post = mongoose.model('post', postSchema);
module.exports = Post;

