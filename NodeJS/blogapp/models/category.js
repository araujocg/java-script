const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
    name: { type: String, require: true },
    slug: { type: String, require: true },
    date: { type: Date, default: Date.now() }
})

mongoose.model('category', categorySchema);

const Category = mongoose.model('category');

const CreateNewCategory = async(name, slug) => {
    try{
        const newCategory = new Category({
            name: name,
            slug: slug
        });
        const result = await newCategory.save();
        console.log("Categoria criada com sucesso:", result);
        return result; // Retorna a categoria salva

    }catch(err){
        console.error("Erro ao criar categoria:", err.message);
        throw err; // Lança o erro para ser tratado na chamada
    }
}

module.exports = CreateNewCategory;