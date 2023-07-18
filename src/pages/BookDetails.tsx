import { useParams } from "react-router";
import Navbar from "../layouts/Navbar";
import Reviews from "../components/Reviews";
import { useGetBookQuery } from "../redux/api/apiSlice";
import { IBook } from "../types/book";
import { Link, useNavigate } from "react-router-dom";
import newRequest from "../utils/newRequest";
import { toast } from "react-hot-toast";

const BookDetails = () => {
  const { id } = useParams();

  const { data, refetch } = useGetBookQuery(id);
  const book: IBook = data;

  const navigate = useNavigate();
  const handleDelete = async () => {
    const agree = window.confirm("Are you sure you wanna delete this Book?");
    if (agree) {
      try {
        await newRequest.delete(`book/${id}`);
        toast.success("Book deleted...");
        refetch();
        navigate("/books");
      } catch (error: any) {
        toast.error(error.response.data.message);
        console.log(error.response.data.message);
      }
    }
  };
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
          <div className="space-x-8 mt-4">
            <Link to={`/editBook/${id}`}>
              <button className="px-6 py-3 bg-green-400 rounded-full text-white transition font-semibold md:text-xl">
                Edit Book
              </button>
            </Link>

            <button
              className="px-6 py-3 bg-red-500 rounded-full text-white transition font-semibold md:text-xl"
              onClick={handleDelete}
            >
              Delete Book
            </button>
          </div>
        </div>
      </div>

      <Reviews id={id!} />
    </div>
  );
};

export default BookDetails;
