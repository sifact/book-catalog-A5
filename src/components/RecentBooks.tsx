import { Link } from "react-router-dom";

import { IBook } from "../types/book";
import { useGetFilterTermsQuery } from "../redux/api/apiSlice";

const RecentBooks = () => {
  const { data: books } = useGetFilterTermsQuery(undefined);

  return (
    <div>
      <h1 className="text-5xl font-semibold text-center mb-20">Recent Books</h1>
      <div className="my-32 grid grid-cols-1 md:grid-cols-2  gap-32 container mx-auto">
        {books ? (
          books.map(
            (book: IBook, index: number) =>
              index <= 4 && <RecentBook key={book._id} book={book} />
          )
        ) : (
          <>Loading...</>
        )}
      </div>
    </div>
  );
};

export default RecentBooks;

const RecentBook: React.FC<{ book: IBook }> = ({ book }) => {
  const { _id, img, title, author, publishedDate } = book;
  return (
    <Link to={`/bookDetails/${_id}`}>
      <div className="relative">
        <div className="h-[300px] w-[500px] bg-gradient-to-tr from-gray-900 to-green-50">
          <img
            className="object-cover w-full h-full rounded-md mix-blend-overlay"
            src={img}
            alt=""
          />
        </div>
        <div className="bg-green-100 max-w-fit p-6 rounded-md space-y-3 absolute bottom-[-20%] right-[15%]">
          <h1 className="text-2xl font-semibold">{title}</h1>
          <div className="opacity-60 font-semibold">
            <p>{author}</p>
            <p>{publishedDate}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
