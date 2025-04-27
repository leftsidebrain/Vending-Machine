"use client";
import api from "@/lib/api";
import createValidation from "@/lib/createValidation";
import { useProducts } from "@/utils/useProducts";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Controller } from "react-hook-form";

const page = () => {
  const params = useParams();
  const id = params.id;

  const { getProductById } = useProducts();

  if (id !== "add") {
    useEffect(() => {
      const fetchProduct = async () => {
        try {
          const response = await getProductById(Number(id));
          if (response !== null) {
            reset(response);
          }
        } catch (error) {
          console.error("Error fetching product", error);
        }
      };
      fetchProduct();
    }, [id]);
  }

  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = createValidation();

  const onError = (error: any) => {
    console.log(error);
  };

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: any) => {
    setLoading(true);
    try {
      if (id !== "add") {
        await api.patch(`/products/${id}`, data);
        alert("Product updated successfully!");
        return;
      } else {
        await api.post("/products", data);
        alert("Product added successfully!");
      }
    } catch (error) {
      alert("Error adding product");
    } finally {
      setLoading(false);
      reset();
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4 mt-[25vh]">
      <h2 className="text-3xl font-bold mb-4 text-center">
        {id !== "add" ? "Update Product" : "Create Product"}
      </h2>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <div className="mb-4">
          <label htmlFor="name">Product Name</label>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                placeholder="name"
                className="w-full mt-2 p-2 border border-gray-300 rounded-xl"
              />
            )}
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="price"> Price</label>
          <Controller
            name="price"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="number"
                className="w-full mt-2 p-2 border border-gray-300 rounded-xl"
              />
            )}
          />
          {errors.price && (
            <p className="text-red-500 text-sm">{errors.price.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="stock"> Stock</label>
          <Controller
            name="stock"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="number"
                className="w-full mt-2 p-2 border border-gray-300 rounded-xl"
              />
            )}
          />
          {errors.stock && (
            <p className="text-red-500 text-sm">{errors.stock.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="image">Image</label>
          <Controller
            name="image"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                placeholder="Link for image"
                className="w-full mt-2 p-2 border border-gray-300 rounded-xl"
              />
            )}
          />
          {errors.image && (
            <p className="text-red-500 text-sm">{errors.image.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white rounded-lg"
          disabled={loading}
        >
          {loading ? "Loading..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default page;
