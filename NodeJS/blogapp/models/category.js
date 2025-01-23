const mongoose = require("mongoose");
const { redirect } = require("react-router-dom");

const categorySchema = mongoose.Schema({
    name: { type: String, required: true },
    slug: { type: String, required: true },
    date: { type: Date, default: Date.now() }
});

mongoose.model('category', categorySchema);

const Category = mongoose.model('category');

const CreateNewCategory = async(name, slug) => {
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
        const result = await newCategory.save();
        return console.log("Categoria criada com sucesso:", result);

    }catch(err){
        console.error("Erro ao criar categoria:", err.message);
        throw err; // /Lança o erro para ser tratado na chamada
    }
}

// const newCategory = new Category({
//     name: name,
//     slug: slug,
// });

// new Category(newCategory).save().then(()=>{
//     console.log("Categoria criada com sucesso:", result); // poderia até ter feito dessa forma mas a outra parece mais recomendavel 
// }).catch((err)  => {
//     console.error("ERRO "+ err);
// })



module.exports = CreateNewCategory;