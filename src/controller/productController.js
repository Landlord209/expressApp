const getAllProducts =  (req, res)=>{
    
    res.sendFile("./index.html",{root: __dirname} )
    try {
        return res.status(200).json(products)
    } catch (error) {
        return res.status(404).json(error.message)
        
    }

}

const getAProduct = (req,res)=>{
        try {
            const itemid = req.params.itemid
            
            const item = products.filter((id)=> id.id === Number(itemid))
    
            return res.status(200).json(item)
            
        
        //   return  res.status(200).json(product);           
       
        } catch (error) {
            return res.status(404).json(error.message)
        }
    }

    const createProduct = (req, res)=>{
  
        try {
            const email  = req.body.email
            const password = req.body.password
    
            return res.status(201).json({email,password})
            //  console.log(req.body);
        } catch (error) {
            return res.status(404).json(error.message)
            
        }
    }


    module.exports = {getAProduct,getAllProducts,createProduct}