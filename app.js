const express = require("express")  // serveris
const cors = require("cors")

const app = express()

app.use(express.json()) ///Butinai reikia isideti, kad pasiimtu duomenis is req.body

app.use(cors())     // elinimuojam cross-over efektus...
app.listen(4000)   // klausom porto: pvz.: 4000

const router = require("./routes/main")
app.use("/", router)

// const scrape = require('aliexpress-product-scraper');
// const product = scrape('32958933105');

// product.then(res => {
//   console.log('The JSON: ', res);
// });