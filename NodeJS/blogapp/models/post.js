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

const createNewPost = async(title, slug, description, content, category) => {
    try{
        const newPost = new Post({
            title: title,
            slug: slug,
            description: description,
            ontent: content,
            category: category
        });

        const result = await newPost.save();

    }catch(err){
        throw err; // /Lança o erro para ser tratado na chamada
    }
}

module.exports = {createNewPost};

