import React from "react";
import { Link } from "react-router";
import { TbTruckDelivery } from "react-icons/tb";
import { LuPackageCheck } from "react-icons/lu";
import { Button } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../../features/count/countSlice";
import { useGetProductByIdQuery } from "../../features/product/productSlice2";

export default function CardProduct({ thumbnail, title, id, description, priceOut }) {

  // const count = useSelector((state) => state.count.value);
  // const dispatch = useDispatch();

  const { data, isLoading } = useGetProductByIdQuery(id);

  return (
    <Link
      to={`/products/${id}`}
      className="flex flex-col rounded-lg border border-zinc-200 bg-white p-6 shadow-sm hover:ring-2 hover:ring-primary-700 hover:scale-102 hover:duration-200 ease-in-out dark:border-zinc-700 dark:bg-zinc-800"
    >
      <div className="h-56 w-full">
        <img
          className="mx-auto h-full object-cover rounded-lg dark:block"
          src={
            thumbnail && thumbnail.startsWith("https://api.escuelajs.co/")
              ? "https://via.placeholder.com/640x480?text=No+Image"
              : thumbnail
          }
          alt={title}
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/640x480?text=No+Image";
          }}
        />
      </div>
      <div className="pt-6 flex flex-col flex-grow justify-between">
        <div className="grid gap-1">
          <span className="text-lg font-semibold leading-tight text-zinc-900 dark:text-white">
            {title}
          </span>
          <p className="text-sm font-medium text-zinc-600 dark:text-zinc-300 h-10 line-clamp-2">
            {description || "No description available"}
          </p>
        </div>
        <ul className="mt-2 flex items-center gap-4">
          <li className="flex items-center gap-2">
            <TbTruckDelivery className="text-zinc-500 dark:text-zinc-400" />
            <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
              Fast Delivery
            </p>
          </li>
          <li className="flex items-center gap-2">
            <LuPackageCheck className="text-zinc-500 dark:text-zinc-400" />
            <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
              In stock
            </span>
          </li>
        </ul>
        <div className="mt-4 flex items-center justify-between gap-4">
          <p className="text-2xl font-extrabold leading-tight text-zinc-900 dark:text-white">
            ${data?.priceOut || "N/A"}
          </p>
          <Button
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              dispatch(increment());
            }}
            type="button"
            className="inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 active:outline-none active:ring-3 active:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Add to cart
          </Button>
        </div>
      </div>
    </Link>
  );
}