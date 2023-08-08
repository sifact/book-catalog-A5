import { toast } from "react-hot-toast";

import Navbar from "../layouts/Navbar";
import { useAddBookMutation } from "../redux/api/apiSlice";
import { useState } from "react";
import upload from "../utils/upload";

const AddBook = () => {
  const [addBook, {}] = useAddBookMutation();
  const [file, setFile] = useState(null);
  console.log(file);

  const handleSubmit = async (e: {
    preventDefault: () => void;
    target: any;
  }) => {
    e.preventDefault();

    const url = await upload(file);
    console.log(url);
    const form = e.target;

    const title = form.title.value;
    const genre = form.genre.value;
    const author = form.author.value;
    const published = form.published.value;
    const desc = form.desc.value;

    const bookInfo = {
      title,
      genre,
      author,
      publishedDate: published,
      desc,
      img: url,
    };

    addBook(bookInfo)
      .unwrap()
      .then(() => {
        // The promise resolves when the mutation is successful
        // The toast should be shown only after the successful mutation
        toast.success("Boo is added...");
      })
      .catch((error) => {
        toast.error("Something went wrong...");
        console.log(error);
      });
  };

  return (
    <div className="pb-96">
      <div className="bg-green-900 text-white text-lg pb-8 rounded-br-[15%] mb-16">
        <Navbar />
        <div className="my-4  text-center">
          <h1 className="text-4xl font-semibold">Add Book</h1>
        </div>
      </div>
      <div className=" w-full items-center relative container mx-auto">
        <div className="flex justify-center">
          <div className="w-[500px] md:w-[900px] h-[500px]">
            <img
              className="object-cover object-bottom w-full h-full rounded-lg"
              src="/images/bg-1.jpg"
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

            <div className="flex justify-between items-center gap-8 text-xl">
              <div className="mb-4">
                <label className="block font-medium mb-2" htmlFor="Athor">
                  Author
                </label>
                <input
                  className="border-[2.5px] rounded-sm border-green-700 p-4 w-full  outline-none"
                  type="text"
                  name="author"
                  required
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
                  required
                />
              </div>
            </div>

            <div className="mb-4 w-full text-xl">
              <label className="block font-medium mb-2" htmlFor="Quality">
                Description
              </label>
              <input
                className="border-[2.5px] rounded-sm border-green-700 p-4 w-full  outline-none"
                type="text"
                name="desc"
                required
              />
            </div>
            <div className="my-4 w-full flex flex-col text-xl">
              <label htmlFor="">Image</label>
              <input
                type="file"
                onChange={(e: any) => setFile(e.target.files[0])}
              />
            </div>

            <div className="text-right">
              <button className="bg-green-800 py-4 px-6 text-white rounded-full text-xl hover:bg-green-900">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
