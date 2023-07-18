import { useState } from "react";
import SearchFilter from "../components/SearchFilter";
import Navbar from "../layouts/Navbar";
import { useGetBooksQuery } from "../redux/api/apiSlice";
import { IBook } from "../types/book";
import { Link } from "react-router-dom";

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
      <div className="bg-green-900 text-white pb-32 rounded-br-[15%] ">
        <Navbar />
        <div className="my-12 space-y-6 text-center">
          <h1 className="text-5xl font-semibold">Recent Books</h1>
          <p className="text-white text-xl opacity-80">
            Discover, read, and download a wide range of books in one convenient
            hub
          </p>
        </div>

        <SearchFilter
          filters={filters}
          refetch={refetch}
          setFilters={setFilters}
        />
      </div>
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
  const { _id, img, title, author, publishedDate, genre } = book;
  return (
    <Link to={`/bookDetails/${_id}`}>
      <div className="relative space-y-6">
        <div className="h-[300px]  bg-gradient-to-tr from-gray-900 to-green-50 rounded-lg">
          <img
            className="object-cover w-full h-full rounded-lg mix-blend-overlay"
            src={img}
            alt=""
          />
        </div>
        <div className="rounded-lg space-y-3 ">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold">{title}</h1>
            <p className="opacity-60 text-xl">{genre}</p>
          </div>
          <div className="opacity-60 font-semibold">
            <p>{author}</p>
            <p>{publishedDate}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
