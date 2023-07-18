import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1/" }),
  reducerPath: "adminApi",
  tagTypes: ["User", "Transactions", "Books"],

  endpoints: (build) => ({
    getBooks: build.query({
      query: ({ searchTerm, genre, year }) => ({
        url: `book/`,
        method: "GET",
        params: { searchTerm, genre, year },
      }),

      providesTags: ["Books"],
    }),

    getBook: build.query({
      query: (id) => `book/${id}`,
    }),

    getFilterTerms: build.query({
      query: () => `book/`,
    }),

    getTransactions: build.query({
      query: ({ page, pageSize, sort, search }) => ({
        url: "client/transactions",
        method: "GET",
        params: { page, pageSize, sort, search },
      }),
      providesTags: ["Transactions"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetTransactionsQuery,
  useGetBookQuery,
  useGetFilterTermsQuery,
} = api;
