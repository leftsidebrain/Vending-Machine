"use client";

import api from "@/lib/api";
import { Product } from "@/utils/type";
import { useProducts } from "@/utils/useProducts";
import Link from "next/link";
import { useEffect, useState } from "react";

const AdminProductForm = () => {
  const [products, setproducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { getProducts } = useProducts();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await getProducts();
      setproducts(response);
    } catch (error) {
      console.error("Error fetching products", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm("Are you sure you want to delete this product?")) {
      return;
    }
    try {
      await api.delete(`/products/${id}`);
      fetchData();
    } catch (error) {
      console.error("Error deleting product", error);
    }
  };

  if (loading) {
    return <div className="text-center text-blue-500">Loading...</div>;
  }

  return (
    <main className="p-5 max-w-[95vw] mx-auto">
      <button className="bg-green-500 text-white px-3 py-2 rounded hover:bg-green-600 mb-4 ">
        <Link href={"/admin/add"}>Add Product</Link>
      </button>
      <div className="overflow-x-auto rounded-lg shadow">
        <table className="min-w-full bg-white shadow-m">
          <thead className="bg-gray-300">
            <tr className="bg-gray-100 text-gray-700 uppercase text-sm leading-normal">
              <th className="px-4 py-2 text-left">No</th>
              <th className="px-4 py-2 text-left">Product Name</th>
              <th className="px-4 py-2 text-left">Price</th>
              <th className="px-4 py-2 text-left">Stock</th>
              <th className="px-4 py-2 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {products.map((product: Product, index) => (
              <tr key={product.id} className="border-t">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2 ">{product.name}</td>
                <td className="px-4 py-2">{product.price}</td>
                <td className="px-4 py-2">{product.stock}</td>
                <td className="py-2 px-4 text-center lg:flex gap-2 lg:justify-center grid grid-cols-1">
                  <button className="bg-yellow-400 text-white px-4 py-1 rounded hover:bg-yellow-500  ">
                    <Link href={`/admin/${product.id}`}>Edit</Link>
                  </button>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="bg-red-500 text-white  rounded hover:bg-red-700 py-1 px-4"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default AdminProductForm;
