const express = require("express")

const app = express()
const port = 3030


const products = [
    {
        id: 1,
        name: "Sweat Shirts",
        category: "Clothings",
        price: 4000,
        color: ["red","grey","blue"],
        sizes: ["sm","m","l","xl"],
        image: "image"
    },
    {
        id: 2,
        name: "Hp pavilion",
        category: "Laptops",
        price: 40000,
        color: ["red","grey","blue"],
        image: "image2"
    },
    {
        id: 3,
        name: "Nike sneakers",
        category: "Shoes",
        price: 40080,
        color: ["red","grey","blue"],
        sizes: ["38","70","31","34"],
        image: "imag3"
    }
]


//Get Request - show us products
// endpoint - http://localhost:3030/products
app.get("/products", (req, res)=>{
    
    res.sendFile("./index.html",{root: __dirname} )
    // try {
    //     return res.status(200).json(products)
    // } catch (error) {
    //     return res.status(404).json(error.message)
        
    // }

})

//Get requests -  show a product
//Endpoint -
// app.get("/products/:itemid",(req,res)=>{
//     try {
//         const itemid = req.params.itemid
        
//         const item = products.filter((id)=> id.id === Number(itemid))

//         return res.status(200).json(item)
        
    
//     //   return  res.status(200).json(product);           
   
//     } catch (error) {
//         return res.status(404).json(error.message)
//     }
// })


//Post  request - create product
//Endpoint - http://localhost:3030/products/create

app.post("/products/create",(req, res)=>{
  
    // try {
    //      console.log(req.body);
    // } catch (error) {
    //     return res.status(404).json(error.message)
        
    // }
})

app.listen(port, ()=>{
    console.log(`Serev er dey run for this port ${port}`);
} )