import { Link } from "react-router-dom";

import {
  useGetReadingListQuery,
  useUpdateReadingListMutation,
} from "../redux/api/apiSlice";
import Navbar from "../layouts/Navbar";
import { useState } from "react";
import { MdDoneAll } from "react-icons/md";
import { toast } from "react-hot-toast";

const ReadingLists = () => {
  const currentUserString = localStorage.getItem("currentUser");
  const currentUser = currentUserString ? JSON.parse(currentUserString) : null;
  const id = currentUser._id;

  const { data: books, isLoading, error } = useGetReadingListQuery(id);

  const [showReadingList, setShowReadingList] = useState(true);

  // console.log(data.bookId);
  return (
    <div className="mb-20">
      <div className="bg-green-900 text-white pb-32 rounded-br-[15%] ">
        <Navbar />
        <div className="my-12 space-y-6 text-center">
          <h1 className="text-5xl font-semibold text-center mb-20">
            ReadingList
          </h1>
        </div>
      </div>

      <div className="bg-green-900 mt-20 p-4 w-[500px] space-x-8 mx-auto text-center rounded-bl-[30%] rounded-tr-[30%]">
        <button
          className={`px-6 py-3 bg-white rounded-full transition font-semibold md:text-xl  ${
            showReadingList && `text-green-400`
          } text-black`}
          onClick={() => setShowReadingList(true)}
        >
          Reading List
        </button>
        <button
          onClick={() => setShowReadingList(false)}
          className={`px-6 py-3 bg-white rounded-full transition font-semibold md:text-xl  ${
            !showReadingList && `text-green-400`
          } text-black`}
        >
          Completed
        </button>
      </div>
      <div
        className="container mx-auto mt-20 columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4 
      [&>a:not(:first-child)]:mt-5 
        lg:[&>a:not(:first-child)]:mt-8 
        
        "
      >
        {isLoading ? (
          <>Loading...</>
        ) : error ? (
          <>Error: {error}</>
        ) : (
          <>
            {books.map((book: any) =>
              showReadingList && !book.isDone ? (
                <ReadingList
                  key={book._id}
                  showReadingList={showReadingList}
                  book={book}
                />
              ) : !showReadingList && book.isDone ? (
                <ReadingList
                  key={book._id}
                  showReadingList={showReadingList}
                  book={book}
                />
              ) : null
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ReadingLists;

interface IReadingList {
  book: any;
  showReadingList: boolean;
}
const ReadingList: React.FC<IReadingList> = ({ book, showReadingList }) => {
  const { _id, img, title } = book?.bookId;

  const [updateBook, {}] = useUpdateReadingListMutation();

  const handleMarkRead = () => {
    updateBook(_id)
      .unwrap()
      .then(() => {
        toast.success("Completed...");
      })
      .catch((error) => {
        toast.error("Something went wrong...");
        console.log(error);
      });
  };

  return (
    <div className="relative bg-gradient-to-tr from-gray-900 to-green-50">
      <img className="rounded-sm  mix-blend-overlay w-full" src={img} alt="" />

      <div className="absolute inset-0 flex items-end p-8 ">
        <div className="relative group">
          <Link to={`/bookDetails/${_id}`}>
            <h2 className="text-white text-4xl transition font-bold cursor-pointer  hover:text-green-500">
              {title}
            </h2>
          </Link>

          <div
            className={`absolute top-[-80px] left-0 cursor-pointer bg-white rounded-[50%] p-3 text-3xl font-bold  ${
              showReadingList ? "block" : "hidden"
            }`}
            onClick={handleMarkRead}
          >
            <MdDoneAll />
            <div className=" hidden group-hover:block absolute  text-black p-2 rounded  top-[60px] right-[5px] text-sm bg-white whitespace-nowrap ">
              Mark as read
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
