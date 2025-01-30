const mongoose = require("mongoose");
const { redirect } = require("react-router-dom");

const categorySchema = mongoose.Schema({
    name: { type: String, required: true },
    slug: { type: String, required: true },
    date: { type: Date, default: Date.now() }
});

const Category = mongoose.model('category', categorySchema);

const createNewCategory = async(name, slug) => {
    // const newCategory = new Category({
    //     name: name,
    //     slug: slug
    // });

    // new Category(newCategory).save().then(()=>{
    //     console.log("Categoria criada com sucesso:", result); // poderia até ter feito dessa forma mas a outra parece mais recomendavel 
    // }).catch((err)  => {
    //     console.error("ERRO category 22/ "+ err);
    // })
    
    try{
        const newCategory = new Category({
            name: name,
            slug: slug
        });
        // Category.find().then((cat) => console.log(cat))
        const result = await newCategory.save();

    }catch(err){
        throw err; // /Lança o erro para ser tratado na chamada
    }
}

const editCategory = async(id, name, slug) =>{
    try{
        const updateCategory = await Category.findByIdAndUpdate(
            id, 
            {$set: {name: name, slug: slug}},
            { new: true }
        );
        console.log("Categoria Atualizada!")
    }catch(err){
        throw err;
    }
}



module.exports = {createNewCategory, editCategory};