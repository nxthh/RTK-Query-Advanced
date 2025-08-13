import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router";
import { useCreateProductMutation } from "../../features/product/productSlice2";
import { ToastContainer, toast } from "react-toastify";
import { Button, Label, TextInput } from "flowbite-react";
import { FaArrowLeft } from "react-icons/fa";

const schema = z.object({
  name: z.string().nonempty("Name is required"),
  description: z.string().nonempty("Description is required"),
  stockQuantity: z
    .number()
    .int()
    .nonnegative("Stock quantity must be 0 or more"),
  priceIn: z.number().positive("Price In must be greater than 0"),
  priceOut: z.number().positive("Price Out must be greater than 0"),
  thumbnail: z.string().url("Thumbnail must be a valid URL"),
});

export default function CreateProductPage() {
  const navigate = useNavigate();
  const [createProduct, { isLoading }] = useCreateProductMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      description: "",
      stockQuantity: 0,
      priceIn: 0,
      priceOut: 0,
      thumbnail: "",
    },
  });

  const staticData = {
    computerSpec: {
      processor: "N/A",
      ram: "N/A",
      storage: "N/A",
      gpu: "N/A",
      os: "N/A",
      screenSize: "N/A",
      battery: "N/A",
    },
    discount: 0,
    color: [
      {
        color: "Fresh Green",
        images: [
          "https://images.unsplash.com/photo-1604977042946-1eecc30f269e?w=500",
        ],
      },
    ],
    warranty: "5 Days Freshness Guarantee",
    availability: true,
    images: [
      "https://images.unsplash.com/photo-1604977042946-1eecc30f269e?w=800",
    ],
    categoryUuid: "dc071830-ce8a-40e2-ad51-3c1adeeb02cb",
    supplierUuid: "0980127a-dc6d-487d-b166-957bcda2540d",
    brandUuid: "8265f3c7-9aea-498c-88b2-9e1bacb4f716",
  };

  const onSubmit = async (data) => {
    try {
      const payload = {
        ...data,
        ...staticData,
      };
      const result = await createProduct(payload).unwrap();
      if (result) {
        toast.success("Product created successfully!");
        reset(); // Reset form fields to default values
      }
    } catch (error) {
      const errorMessage =
        error?.data?.message || error?.message || "Failed to create product.";
      toast.error(errorMessage);
      console.error("Failed to create product:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-lg">
        <div className="relative flex items-center justify-center mb-4">
          <Button
            type="button"
            onClick={() => navigate(-1)}
            className="absolute left-0 bg-transparent dark:bg-transparent hover:bg-gray-200 text-gray-800 dark:text-white dark:hover:bg-zinc-700 font-semibold py-2 px-4"
          >
            <FaArrowLeft />
          </Button>
          <h1 className="text-2xl md:text-3xl font-bold text-center text-zinc-900 dark:text-white">
            Create New Product
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
              <Label htmlFor="priceIn" className="block text-sm font-medium">
                Price In
              </Label>
              <TextInput
                {...register("priceIn", { valueAsNumber: true })}
                id="priceIn"
                type="number"
                placeholder="Price In"
                min="0"
                step="0.01"
                className="[&>input]:bg-white [&>input]:dark:bg-zinc-800 [&>input]:placeholder-gray-400 [&>input]:dark:placeholder-gray-300 [&>input]:border-gray-300 [&>input]:dark:border-zinc-600 [&>input]:rounded-xl"
              />
              {errors.priceIn && (
                <p className="text-sm mt-1">{errors.priceIn.message}</p>
              )}
            </div>
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
          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading ? "Creating..." : "Create Product"}
          </Button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}
