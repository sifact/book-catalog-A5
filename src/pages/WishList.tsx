import { Link } from "react-router-dom";

import { useGetFromWishListQuery } from "../redux/api/apiSlice";
import Navbar from "../layouts/Navbar";

const WishLists = () => {
  const currentUserString = localStorage.getItem("currentUser");
  const currentUser = currentUserString ? JSON.parse(currentUserString) : null;
  const id = currentUser?._id;
  const { data: books } = useGetFromWishListQuery(id);

  // console.log(data.bookId);
  return (
    <div>
      <div className="bg-green-900 text-white pb-32 rounded-br-[15%] ">
        <Navbar />
        <div className="my-12 space-y-6 text-center">
          <h1 className="text-5xl font-semibold text-center mb-20">WishList</h1>
        </div>
      </div>
      <div
        className="container mx-auto mt-20 columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4 
      [&>a:not(:first-child)]:mt-5 
        lg:[&>a:not(:first-child)]:mt-8 
        
        "
      >
        {books ? (
          books.map((book: any) => <WishList key={book?._id} book={book} />)
        ) : (
          <>Loading...</>
        )}
      </div>
    </div>
  );
};

export default WishLists;

interface IWishList {
  book: any;
}
const WishList: React.FC<IWishList> = ({ book }) => {
  return (
    <Link to={`/bookDetails/${book?._id}`}>
      <div className="relative bg-gradient-to-tr from-gray-900 to-green-50">
        <img
          className="rounded-sm  mix-blend-overlay w-full"
          src={book?.img}
          alt=""
        />
        {/* <h1>{name}</h1> */}
        <div className="absolute inset-0 flex items-end p-8 ">
          <h2 className="text-white text-4xl transition font-bold cursor-pointer  hover:text-green-500">
            {book?.title}
          </h2>
        </div>
      </div>
    </Link>
  );
};
