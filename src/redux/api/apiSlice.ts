import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://book-catelog-a5-server-sifact.vercel.app/api/v1",
    // baseUrl: "http://localhost:5000/api/v1",
    credentials: "include",
  }),
  reducerPath: "adminApi",

  tagTypes: ["Books", "Book", "Filter", "Reviews", "WishList", "ReadingList"],

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

    addBook: build.mutation({
      query: (book) => ({
        url: `book`,
        method: "POST",
        body: book,
      }),
      invalidatesTags: ["Books"],
    }),

    deleteBook: build.mutation({
      query: (id) => ({
        url: `book/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Books"],
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

    addToWishList: build.mutation({
      query: (body) => ({
        url: `wishList`,
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["WishList"],
    }),

    getFromWishList: build.query({
      query: (id) => `wishList/${id}`,
      providesTags: ["WishList"],
    }),

    addToReadingList: build.mutation({
      query: (body) => ({
        url: `readingList`,
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["ReadingList"],
    }),

    getReadingList: build.query({
      query: (id) => `readingList/${id}`,
      providesTags: ["ReadingList"],
    }),

    updateReadingList: build.mutation({
      query: (id) => ({
        url: `readingList/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["ReadingList"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useAddBookMutation,
  useAddReviewMutation,
  useGetReviewsQuery,
  useDeleteBookMutation,
  useGetBookQuery,
  useGetFilterTermsQuery,
  useEditBookMutation,
  useGetFromWishListQuery,
  useAddToWishListMutation,
  useAddToReadingListMutation,
  useGetReadingListQuery,
  useUpdateReadingListMutation,
} = api;
