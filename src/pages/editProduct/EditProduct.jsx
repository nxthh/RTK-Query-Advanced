import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  useGetProductByIdQuery,
  useUpdateProductMutation,
} from "../../features/product/productSlice2";
import { useNavigate, useParams } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import toastify CSS
import { Button, Label, TextInput } from "flowbite-react";
import { FaArrowLeft } from "react-icons/fa";

const schema = z.object({
  name: z.string().nonempty("Name is required"),
  description: z.string().nonempty("Description is required"),
  stockQuantity: z
    .number()
    .int()
    .nonnegative("Stock quantity must be 0 or more"),
  priceOut: z.number().positive("Price Out must be greater than 0"),
  thumbnail: z.string().url("Thumbnail must be a valid URL"),
});

export default function EditProductPage() {
  const { id } = useParams(); // Get product id from URL param
  const navigate = useNavigate();

  // Fetch existing product data by ID
  const { data: product, isLoading } = useGetProductByIdQuery(id);

  const {
    register,
    handleSubmit,
    reset, // important for setting form values dynamically
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      description: "",
      stockQuantity: 0,
      priceOut: 0,
      thumbnail: "",
    },
  });

  // When product data is loaded, set it as default form values
  useEffect(() => {
    if (product) {
      reset({
        name: product.name,
        description: product.description,
        stockQuantity: product.stockQuantity,
        priceOut: product.priceOut,
        thumbnail: product.thumbnail,
      });
    }
  }, [product, reset]);

  const [updateProduct, { isLoading: updating }] = useUpdateProductMutation();
  const staticData = {
    priceIn: 1,
    discount: product?.discount,
    color: [
      {
        color: "string",
        images: ["string"],
      },
    ],
    warranty: product?.warranty,
    availability: true,
    categoryUuid: product?.category?.uuid,
    supplierUuid: product?.supplier?.uuid,
    brandUuid: product?.brand?.uuid,
  };

  const onSubmit = async (formData) => {
    try {
      await updateProduct({ id, ...staticData, ...formData }).unwrap();
      toast.success("Product updated successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
    } catch (err) {
      const errorMessage =
        err?.data?.message || err?.message || "Failed to update product.";
      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
      console.error("Update failed", err);
    }
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-lg">
        <div className="relative flex items-center justify-center mb-4">
          <Button
            type="button"
            onClick={() => navigate(-1)}
            className="absolute left-0 bg-transparent hover:bg-gray-200 text-gray-800 dark:text-white dark:hover:bg-zinc-700 font-semibold py-2 px-4"
          >
            <FaArrowLeft />
          </Button>
          <h1 className="text-2xl md:text-3xl font-bold text-center text-zinc-900 dark:text-white">
            Edit Product
          </h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="name" className="block text-sm font-medium">
                Name
              </Label>
              <TextInput
                {...register("name")}
                id="name"
                type="text"
                placeholder="Product Name"
                className="[&>input]:bg-white [&>input]:dark:bg-zinc-800 [&>input]:placeholder-gray-400 [&>input]:dark:placeholder-gray-300 [&>input]:border-gray-300 [&>input]:dark:border-zinc-600 [&>input]:rounded-xl"
              />
              {errors.name && (
                <p className="text-sm mt-1">{errors.name.message}</p>
              )}
            </div>
            <div>
              <Label
                htmlFor="stockQuantity"
                className="block text-sm font-medium"
              >
                Stock Quantity
              </Label>
              <TextInput
                {...register("stockQuantity", { valueAsNumber: true })}
                id="stockQuantity"
                type="number"
                placeholder="Stock Quantity"
                min="0"
                className="[&>input]:bg-white [&>input]:dark:bg-zinc-800 [&>input]:placeholder-gray-400 [&>input]:dark:placeholder-gray-300 [&>input]:border-gray-300 [&>input]:dark:border-zinc-600 [&>input]:rounded-xl"
              />
              {errors.stockQuantity && (
                <p className="text-sm mt-1">{errors.stockQuantity.message}</p>
              )}
            </div>
          </div>
          <div>
            <Label htmlFor="description" className="block text-sm font-medium">
              Description
            </Label>
            <TextInput
              {...register("description")}
              id="description"
              type="textarea"
              placeholder="Product Description"
              rows="4"
              className="[&>input]:bg-white [&>input]:dark:bg-zinc-800 [&>input]:placeholder-gray-400 [&>input]:dark:placeholder-gray-300 [&>input]:border-gray-300 [&>input]:dark:border-zinc-600 [&>input]:rounded-xl"
            />
            {errors.description && (
              <p className="text-sm mt-1">{errors.description.message}</p>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="priceOut" className="block text-sm font-medium">
                Price Out
              </Label>
              <TextInput
                {...register("priceOut", { valueAsNumber: true })}
                id="priceOut"
                type="number"
                placeholder="Price Out"
                min="0"
                step="0.01"
                className="[&>input]:bg-white [&>input]:dark:bg-zinc-800 [&>input]:placeholder-gray-400 [&>input]:dark:placeholder-gray-300 [&>input]:border-gray-300 [&>input]:dark:border-zinc-600 [&>input]:rounded-xl"
              />
              {errors.priceOut && (
                <p className="text-sm mt-1">{errors.priceOut.message}</p>
              )}
            </div>
          </div>
          <div>
            <Label htmlFor="thumbnail" className="block text-sm font-medium">
              Thumbnail URL
            </Label>
            <TextInput
              {...register("thumbnail")}
              id="thumbnail"
              type="url"
              placeholder="Thumbnail URL"
              className="[&>input]:bg-white [&>input]:dark:bg-zinc-800 [&>input]:placeholder-gray-400 [&>input]:dark:placeholder-gray-300 [&>input]:border-gray-300 [&>input]:dark:border-zinc-600 [&>input]:rounded-xl"
            />
            {errors.thumbnail && (
              <p className="text-sm mt-1">{errors.thumbnail.message}</p>
            )}
          </div>
          {errors.root && (
            <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
              {errors.root.message}
            </div>
          )}
          <Button type="submit" disabled={updating} className="w-full">
            {updating ? "Updating..." : "Update Product"}
          </Button>
        </form>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}