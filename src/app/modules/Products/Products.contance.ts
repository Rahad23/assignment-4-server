import { Types } from "mongoose";

export const productSearchableFields = ['name', 'description', 'price'];
export interface ICategory {
    _id: Types.ObjectId;
    name: string;
  }

 export type TUpdateProduct = {
    name: string;
    price: string;
    description: string;
    category: string;
    productImg: string
  }