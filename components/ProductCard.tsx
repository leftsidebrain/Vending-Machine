"use client";

import { ProductCardProps } from "@/utils/type";
import React from "react";

const ProductCard: React.FC<ProductCardProps> = ({ product, onBuy }) => {
  return (
    <div className="rounded-lg p-4 flex flex-col items-center shadow-lg bg-stone-100">
      <img
        src={product.image}
        alt={product.name}
        className="h-40 w-32 object-cover mb-4 rounded-2xl shadow-lg"
      />
      <h2 className="text-lg font-bold text-black">{product.name}</h2>
      <p className="text-sm text-black">
        Harga: Rp{product.price.toLocaleString()}
      </p>
      <p className="text-sm text-black">Stok: {product.stock}</p>
      <button
        onClick={() => onBuy(product)}
        className="mt-3  bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:bg-gray-400 w-full"
        disabled={product.stock === 0}
      >
        Beli
      </button>
    </div>
  );
};

export default ProductCard;
