import { useParams } from "react-router";
import Navbar from "../layouts/Navbar";

const BookDetails = () => {
  const data = useParams();
  console.log(data);
  return (
    <div>
      <div className="bg-green-900 text-white pb-8 rounded-br-[15%] ">
        <Navbar />
        <div className="my-8 space-y-6 text-center">
          <h1 className="text-5xl font-semibold">Book Details</h1>
        </div>
      </div>

      <div className="my-32 flex">
        <div className="flex-1 h-[500px]">
          <img
            className="object-cover w-full h-full"
            src="/images/book-3.jpg"
            alt=""
          />
        </div>
        <div className="flex-1 flex flex-col gap-4 p-32">
          <h1 className="text-xl font-bold">La mesarable</h1>
          <p className="text-lg">Fiction</p>
          <p className="text-xl opacity-60">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
            magnam odit necessitatibus consectetur nostrum a excepturi autem.
            Totam, laborum corrupti?
          </p>
          <span className="text-lg">Mr. X</span>
          <span className="text-lg">27 Jan, 2003</span>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
