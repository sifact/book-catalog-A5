import { useState } from "react";
import SearchFilter from "../components/SearchFilter";
import Navbar from "../layouts/Navbar";
import {
  useAddToReadingListMutation,
  useAddToWishListMutation,
  useGetBooksQuery,
} from "../redux/api/apiSlice";
import { IBook } from "../types/book";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { toast } from "react-hot-toast";

const Books = () => {
  const [filters, setFilters] = useState<IFilters>({
    genre: "",
    year: "",
    search: "",
  });

  const { search, genre, year } = filters;

  const { data, refetch } = useGetBooksQuery({
    ...(search && { search }),
    ...(genre && { genre }),
    ...(year && { year }),
  });

  return (
    <div>
      <div className="my-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 container mx-auto">
        {data ? (
          data.map((book: IBook) => <Book key={book._id} book={book} />)
        ) : (
          <>Loading...</>
        )}
      </div>
    </div>
  );
};

export default Books;

const Book: React.FC<{ book: IBook }> = ({ book }) => {
  const currentUserString = localStorage.getItem("currentUser");
  const currentUser = currentUserString ? JSON.parse(currentUserString) : null;

  const { _id, img, title, author, publishedDate, genre } = book;

  const [addToWishList, {}] = useAddToWishListMutation();
  const [addToReadingList, {}] = useAddToReadingListMutation();

  const handleWishList = () => {
    const options = {
      bookId: _id,
      userId: currentUser._id,
    };

    addToWishList(options)
      .unwrap()
      .then(() => {
        toast.success("Added to wishlist...");
      })
      .catch((error) => {
        toast.error("This book is already added...");
        console.log(error);
      });
  };

  const handleReadingList = () => {
    const options = {
      bookId: _id,
      userId: currentUser._id,
    };

    addToReadingList(options)
      .unwrap()
      .then(() => {
        toast.success("Added to reading list...");
      })
      .catch((error) => {
        toast.error("This book is already added...");
        console.log(error);
      });
  };
  return (
    <div className="relative space-y-6">
      <div className="relative h-[300px]  bg-gradient-to-tr from-gray-900 to-green-50 rounded-lg">
        <img
          className="object-cover w-full h-full rounded-lg mix-blend-overlay"
          src={img}
          alt=""
        />
        <div className="absolute inset-0 w-full top-4 right-4 p-4 space-x-4 ">
          <div
            className="cursor-pointer group inline-block relative bg-white rounded-[50%] p-2"
            onClick={handleWishList}
          >
            <AiOutlineHeart className="text-3xl font-bold" />

            <div className="hidden group-hover:block absolute left-0 text-black p-2 rounded  top-[48px] bg-white ">
              WishList
            </div>
          </div>
          <div className="cursor-pointer group inline-block relative bg-white rounded-[50%] p-2">
            <AiOutlinePlus
              className="text-3xl font-bold"
              onClick={handleReadingList}
            />
            <div className="hidden group-hover:block absolute top-[48px] left-0 bg-white text-black p-2 rounded">
              Read Later
            </div>
          </div>
        </div>
      </div>

      <Link to={`/bookDetails/${_id}`}>
        <div className="rounded-lg space-y-3 ">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold">{title}</h1>
            <p className="opacity-60 text-xl">{genre}</p>
          </div>
          <div className="opacity-60 font-semibold flex justify-between">
            <div>
              <p>{author}</p>
              <p>{publishedDate}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
