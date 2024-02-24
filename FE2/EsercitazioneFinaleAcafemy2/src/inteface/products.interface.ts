import { Category } from "./category.interface";

export interface Products{
    idProduct: number,
    name: String,
    description: String,
    category: Category,
    quantity: number,
    price: number;
}