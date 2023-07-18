import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1/" }),
  reducerPath: "adminApi",

  tagTypes: ["Books", "Book", "Filter", "Reviews"],

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

    addReview: build.mutation({
      query: ({ body }) => ({
        url: `/review`,
        method: "POST",
        body: {
          body,
        },
      }),
      invalidatesTags: ["Reviews"],
    }),

    getReviews: build.query({
      query: (id) => `review/${id}`,
      providesTags: ["Reviews"],
    }),

    editBook: build.mutation({
      query: ({ body, id }) => ({
        url: `/book/${id}`,
        method: "PATCH",
        body: {
          body,
        },
      }),
      invalidatesTags: ["Book"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useAddReviewMutation,
  useGetReviewsQuery,
  useGetBookQuery,
  useGetFilterTermsQuery,
  useEditBookMutation,
} = api;
