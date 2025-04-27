"use client";

import React, { useEffect, useState } from "react";
import api from "@/lib/api";
import ProductCard from "@/components/ProductCard";
import MoneyInput from "@/components/MoneInput";
import { Product } from "@/utils/type";
import { useProducts } from "@/utils/useProducts";

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [totalMoney, setTotalMoney] = useState<number>(0);
  const { getProducts } = useProducts();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await getProducts();
    setProducts(res);
  };

  const handleInsertMoney = (amount: number) => {
    setTotalMoney((prev) => prev + amount);
  };

  const handleResetMoney = () => {
    setTotalMoney(0);
  };

  const handleBuyProduct = async (product: Product) => {
    if (product.stock === 0) {
      alert("Stok habis!");
      return;
    }

    if (totalMoney < product.price) {
      alert("Uang tidak cukup!");
      return;
    }

    await api.patch(`/products/${product.id}`, {
      stock: product.stock - 1,
    });

    await api.post("/transactions", {
      productId: product.id,
      productName: product.name,
      price: product.price,
      date: new Date().toISOString(),
    });

    alert(`Berhasil membeli ${product.name}!`);

    setTotalMoney((prev) => prev - product.price);
    fetchProducts();
  };

  return (
    <main className="p-3">
      <h1 className="text-2xl font-bold text-center mb-5">Vending Machine</h1>
      <div className="flex flex-col justify-between lg:min-h-[80vh]">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 px-5">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onBuy={handleBuyProduct}
            />
          ))}
        </div>
        <div className="bg-white p-5 rounded-2xl my-5 mx-5 shadow-lg">
          <MoneyInput
            onInsert={handleInsertMoney}
            onReset={handleResetMoney}
            total={totalMoney}
          />
        </div>
      </div>
    </main>
  );
}
