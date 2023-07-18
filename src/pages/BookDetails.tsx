import { useParams } from "react-router";
import Navbar from "../layouts/Navbar";
import Reviews from "../components/Reviews";
import { useGetBookQuery } from "../redux/api/apiSlice";
import { IBook } from "../types/book";

const BookDetails = () => {
  const { id } = useParams();

  const { data } = useGetBookQuery(id);
  const book: IBook = data;

  return (
    <div>
      <div className="bg-green-900 text-white pb-8 rounded-br-[15%] ">
        <Navbar />
        <div className="my-8 space-y-6 text-center">
          <h1 className="text-5xl font-semibold">Book Details</h1>
        </div>
      </div>

      <div className="my-32 flex justify-center items-center">
        <div className="flex-1 h-[500px]">
          <img
            className="object-cover w-full rounded-md h-full"
            src={book?.img}
            alt=""
          />
        </div>
        <div className="flex-1 flex flex-col gap-4 p-32">
          <h1 className="text-xl font-bold">{book?.title}</h1>
          <p className="text-lg">{book?.genre}</p>
          <p className="text-xl opacity-60">{book?.desc}</p>
          <span className="text-lg">{book?.author}</span>
          <span className="text-lg">{book?.publishedDate}</span>
        </div>
      </div>

      <Reviews id={id!} />
    </div>
  );
};

export default BookDetails;
