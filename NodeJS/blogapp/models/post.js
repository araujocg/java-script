const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = mongoose.Schema({
    title: { type: String, required: true },
    slug: { type: String, required: true },
    description: { type: String, required: true},
    content: { type: String, required: true},
    category: { type: Schema.Types.ObjectId, ref: "category", required: false },
    date: { type: Date, default: Date.now }
});

const Post = mongoose.model('post', postSchema);

const createNewPost = async(title, slug, description, content, category) => {
    try{
        const newPost = new Post({
            title: title,
            slug: slug,
            description: description,
            content: content,
            category: category
        });

        const result = await newPost.save();

    }catch(err){
        throw err; // /Lança o erro para ser tratado na chamada
    }
}

const editPost = async(id, title, slug, description, content, category) =>{
    try{
        console.log(id,title,slug,description, content, category);
        const updatePost = await Post.findByIdAndUpdate(
            id, 
            {$set: {
                title: title,
                slug: slug,
                description: description,
                content: content,
                category: category
            }},
            { new: true }
        );
        console.log("Postagem Atualizada!")
    }catch(err){
        throw err;
    }
}

module.exports = {createNewPost, editPost};

