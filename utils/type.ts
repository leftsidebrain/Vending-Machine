export type Product = {
  id: number;
  name: string;
  price: number;
  stock: number;
  image: string;
};

export type MoneyInputProps = {
  onInsert: (amount: number) => void;
  onReset: () => void;
  total: number;
};

export type ProductCardProps = {
  product: Product;
  onBuy: (product: Product) => void;
};

export type Transaction = {
  id: number;
  productName: string;
  date: string;
  price: string;
};

export interface ICreateProduct {
  name: string;
  price: number;
  stock: number;
  image: string;
}
