import { products } from "./constants/data.js";
import product from "./models/product.schema.js";

const defaultData=async()=>{
try {
   
   await product.insertMany(products);
    console.log("data coming form data sussessfully");
    
} catch (error) {
    console.log("data not coming from database",error.message);
    
}
}

export default defaultData;