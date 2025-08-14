import { useGetProductsQuery } from "../../features/product/productSlice2";
import { NavLink } from "react-router";
import DataTable from "react-data-table-component";
import styled from "styled-components";
import { LuPackagePlus } from "react-icons/lu";
import { Button } from "flowbite-react";
import { TbEdit } from "react-icons/tb";
import { MdDelete } from "react-icons/md";

export default function Product() {
  const { data, isLoading } = useGetProductsQuery();

  const columns = [
    {
      name: "Thumbnail",
      selector: (row) =>
        row?.thumbnail ? (
          <img
            src={row.thumbnail}
            alt={row.name}
            className="w-12 h-12 object-cover rounded"
          />
        ) : (
          "No Image"
        ),
    },
    {
      name: "Name",
      selector: (row) => row?.name,
    },
    {
      name: "Category",
      selector: (row) => row?.category?.name,
    },
    {
      name: "Price",
      selector: (row) => row?.priceOut,
    },
    {
      name: "Stock",
      selector: (row) => row?.stockQuantity,
    },
    {
      name: "Actions",
      button: true,
      cell: (row) => (
        <div className="flex gap-2">
          <NavLink
            role="menuitem"
            aria-current="page"
            aria-haspopup="false"
            className="inline-flex h-[40px] my-5 items-center  text-white rounded-md  bg-emerald-500 transition-colors duration-300 hover:bg-emerald-600 focus:text-emerald-600 focus:outline-none focus-visible:outline-none p-2"
            to={`/edit-product/${row.uuid}`}
          >
            <TbEdit />
          </NavLink>
          <NavLink
            role="menuitem"
            aria-current="page"
            aria-haspopup="false"
            className="inline-flex h-[40px] my-5 items-center  text-white rounded-md  bg-red-500 transition-colors duration-300 hover:bg-red-600 focus:text-red-600 focus:outline-none focus-visible:outline-none p-2"
            to={`/delete/${row.uuid}`}
          >
           <MdDelete />
          </NavLink>
        </div>
      ),
    },
  ];

  const customStyles = {
    rows: {
      style: {},
    },
    headCells: {
      style: {
        backgroundColor: "oklch(49.1% 0.27 292.581)", // Green header
        color: "white",
      },
    },
    cells: {
      style: {},
    },
  };

  console.log("data from RTK Query", data);

  return (
    <>
      <section className=" mt-25 flex justify-center ">
        <NavLink to="/create-product">
          <Button>
            Create product
            <LuPackagePlus className=" ml-2" />
          </Button>
        </NavLink>
      </section>
      <main className="max-w-screen-xl mx-auto mt-20  shadow-lg">
        <div className="rounded-t-xl">
          <DataTable
          columns={columns}
          data={data?.content}
          pagination={styled}
          progressPending={isLoading}
          customStyles={customStyles}
        />
        </div>
        <div>
          
        </div>
      </main>
    </>
  );
}
