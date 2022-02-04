const scrape = require('aliexpress-product-scraper');


module.exports = {
    getproduct: (req, res) => {
        const data = req.body
        console.log("data?",data)
        
        const product =  scrape(data.product);
        let product1 ={}

        product.then(resp => {
            console.log('The JSON: ', resp,"done");
            res.send({
                success: true,
                message: "Product ID send successfully",
                resp
        })
        });
                
        console.log("Product gets successfully....")
    },

    
}