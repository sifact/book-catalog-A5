import toast from "react-hot-toast";
import newRequest from "../utils/newRequest";
import Navbar from "../layouts/Navbar";

import { useParams } from "react-router-dom";

const EditBook = () => {
  const { id } = useParams();
  console.log(id);

  const handleSubmit = async (e: {
    preventDefault: () => void;
    target: any;
  }) => {
    e.preventDefault();

    const form = e.target;

    const title = form.title.value;
    const genre = form.genre.value;
    const author = form.author.value;
    const published = form.published.value;
    const branch = form.branch.value;

    const bookInfo = {
      title,
      genre,
      author,
      published,
      branch,
    };

    try {
      await newRequest.patch(`book/${id}`, bookInfo);
      toast.success("Edited...");
      form.reset();
    } catch (error: any) {
      toast.error(error.response.data.message);
      console.log(error.response.data.message);
    }
  };

  return (
    <div className="pb-80">
      <div className="bg-green-900 text-white text-lg pb-8 rounded-br-[15%] mb-16">
        <Navbar />
        <div className="my-4  text-center">
          <h1 className="text-4xl font-semibold">Edit Book</h1>
        </div>
      </div>
      <div className=" w-full items-center relative container mx-auto">
        <div className="flex justify-center">
          <div className="w-[500px] md:w-[900px] h-[500px]">
            <img
              className="object-cover object-bottom w-full h-full rounded-lg"
              src="/images/bg-2.jpg"
              alt=""
            />
          </div>
          <form
            className=" absolute translate top-1/2  bg-white p-12 rounded-lg shadow-md w-full md:w-[700px]  h-auto"
            onSubmit={handleSubmit}
          >
            <div className="flex justify-between items-center gap-8 ">
              <div className="mb-4 text-xl">
                <label className="block font-medium mb-2" htmlFor="name">
                  Title
                </label>
                <input
                  className="border-[2.5px] rounded-sm border-green-700 p-4 w-full  outline-none"
                  type="text"
                  id="name"
                  name="title"
                  required
                />
              </div>
              <div className="mb-4 text-xl">
                <label className="block font-medium mb-2" htmlFor="number">
                  Genre
                </label>
                <input
                  className="border-[2.5px] rounded-sm border-green-700 p-4 w-full  outline-none"
                  type="text"
                  id="genre"
                  name="genre"
                  required
                />
              </div>
            </div>

            <div className="flex justify-between items-center gap-8 ">
              <div className="mb-4">
                <label className="block font-medium mb-2" htmlFor="Quantity">
                  Author
                </label>
                <input
                  className="border-[2.5px] rounded-sm border-green-700 p-4 w-full  outline-none"
                  type="text"
                  name="author"
                />
              </div>
              <div className="mb-4">
                <label className="block font-medium mb-2" htmlFor="Quantity">
                  Publication Date
                </label>
                <input
                  className="border-[2.5px] rounded-sm border-green-700 p-4 w-full  outline-none"
                  type="text"
                  name="published"
                />
              </div>
            </div>

            <div className="flex justify-between items-center gap-8 ">
              <div className="mb-4">
                <label className="block font-medium mb-2" htmlFor="Quality">
                  Branch
                </label>
                <input
                  className="border-[2.5px] rounded-sm border-green-700 p-4 w-full  outline-none"
                  type="text"
                  name="branch"
                />
              </div>

              <div className="text-right">
                <button className="bg-green-800 py-4 px-6 text-white rounded-full text-xl hover:bg-green-900">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditBook;
