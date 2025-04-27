import api from "@/lib/api";

export const useProducts = () => {
  const getProducts = async () => {
    try {
      const response = await api.get("/products");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const getProductById = async (id: number) => {
    try {
      const response = await api.get(`/products/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return { getProducts, getProductById };
};
