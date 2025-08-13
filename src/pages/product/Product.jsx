import { useGetProductsQuery } from "../../features/product/productSlice2";
import { NavLink } from "react-router";
import DataTable from "react-data-table-component";

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
      name: "Name",
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
            to={`/edit/${row.id}`}
          >
            <span>Edit</span>
          </NavLink>
          <NavLink
            role="menuitem"
            aria-current="page"
            aria-haspopup="false"
            className="inline-flex h-[40px] my-5 items-center  text-white rounded-md  bg-red-500 transition-colors duration-300 hover:bg-red-600 focus:text-red-600 focus:outline-none focus-visible:outline-none p-2"
            to={`/delete/${row.id}`}
          >
            <span>Delete</span>
          </NavLink>
        </div>
      ),
    },
  ];

  console.log("data from RTK Query", data);

  return (
    <main className="max-w-screen-xl mx-auto mt-16">
      <DataTable
        columns={columns}
        data={data?.content}
        pagination
        progressPending={isLoading}
      />
    </main>
  );
}
