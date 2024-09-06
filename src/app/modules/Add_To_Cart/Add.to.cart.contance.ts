export const quantityIncreaseDecrease = {
  INCREASE: 'increase',
  DECREASE: 'decrease',
};

export interface TProduct {
  _id: string;           // Assuming ObjectId is represented as a string
  category: string;      // ObjectId for category, also represented as a string
  name: string;          // Name of the product
  productImg: string;    // URL for the product image
  price: string;         // Price is a string in your data
  ratings: number;       // Number of ratings
  description: string;   // Description of the product
  isAvailable: boolean;  // Availability status
  createdAt: Date;       // Date of creation
  updatedAt: Date;       // Date of last update
  __v: number;           // Mongoose version key
}
