
const db=require('../models')

const Product=db.products
const Review=db.reviews

const addProduct=async(req,res)=>{
    let info={
        title:req.body.title,
        description:req.body.description,
        price:req.body.price,
        published:req.body.publish?req.body.publish:false
    }
    const product=await Product.create(info)
    res.status(201).send(product)
    console.log(product);
}

const getAllProduct=async(req,res)=>{
     let products=await Product.findAll({})
     res.send(products)
}

const getOneProduct=async(req,res)=>{
    let id = req.params.id
    let product = await Product.findOne({ where: { id: id }})
    res.status(200).send(product)

}


const updateProduct=async(req,res)=>{
    let id=req.params.id
    let product=await Product.update(req.body,{where:{id:id}})
    res.status(200).send(product)
}

const deleteProduct=async(req,res)=>{
    let id=req.params.id
    await Product.destroy({where:{id:id}})
    res.status(200).send('product is deleted')
}

const getPublishProduct=async(req,res)=>{
    const products =  await Product.findAll({ where: { published: true }})
    res.status(200).send(products)
}

const getProductReviews =  async (req, res) => {

    const id = req.params.id

    const data = await Product.findOne({
        include: [{
            model: Review,
            as: 'review'
        }],
        where: { id: id }
    })

    res.status(200).send(data)

}

module.exports={
    addProduct,getAllProduct,getPublishProduct,getOneProduct,updateProduct,deleteProduct,getProductReviews
}