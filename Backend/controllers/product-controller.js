import { request, response } from "express";
import product from "../models/product.schema.js";

export const getProduct = async (request, response) => {
  try {
    const products = await product.find({});
    response.status(200).json(products);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

export const getProductById = async (request, response) => {
  try {
    const id = request.params.id;
    
    // Rename the variable to avoid shadowing the imported model
    const foundProduct = await product.findOne({ id: id });

    if (!foundProduct) {
      return response.status(404).json({ message: "Product not found" });
    }

    response.status(200).json(foundProduct);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};
