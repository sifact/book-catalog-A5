import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1/" }),
  reducerPath: "adminApi",
  tagTypes: ["Books", "Book", "Filter"],

  endpoints: (build) => ({
    getBooks: build.query({
      query: ({ search, genre, year }) => ({
        url: `book/`,
        method: "GET",
        params: { search, genre, year },
      }),

      providesTags: ["Books"],
    }),

    getBook: build.query({
      query: (id) => `book/${id}`,
      providesTags: ["Book"],
    }),

    getFilterTerms: build.query({
      query: () => `book/`,
      providesTags: ["Filter"],
    }),
  }),
});

export const {
  useGetBooksQuery,

  useGetBookQuery,
  useGetFilterTermsQuery,
} = api;
