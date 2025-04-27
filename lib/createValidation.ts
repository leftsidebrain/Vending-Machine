import { ICreateProduct } from "@/utils/type";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

export default function createValidation() {
  const schema = yup
    .object({
      name: yup.string().required("Product name is required"),
      price: yup.number().positive().required("Price is required"),
      stock: yup.number().positive().required("Stock is required"),
      image: yup.string().required("Image is required"),
    })
    .required();

  return useForm<ICreateProduct>({
    resolver: yupResolver(schema),
    defaultValues: {
      image: "",
      name: "",
      price: 0,
      stock: 0,
    },
    mode: "onSubmit",
  });
}
