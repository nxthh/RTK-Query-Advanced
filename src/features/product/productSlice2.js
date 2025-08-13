// RTK query
import { apiSlice } from "../api/apiSlice";

// NOTE: these are the _SAME_ API reference!
const productApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query({
      query: () => ({
        url: "/products",
        method: "GET"
      })
    }),
    getProductById: build.query({
      query: (id) => ({
        url: `/products/${id}`,
        method: "GET"
      })
    })
  })
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productApi;

// function getData(enpoint)
