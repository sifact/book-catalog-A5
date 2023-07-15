import Navbar from "../layouts/Navbar";

const Top = () => {
  return (
    <div className="bg-green-900 h-[500px] rounded-bl-[15%]">
      <Navbar />

      <div className="flex flex-col gap-8 justify-center  items-center h-[80%]">
        <h1 className="text-white text-6xl font-semibold">
          Unlock a treasure trove of books
        </h1>
        <p className="text-white text-xl opacity-80">
          Discover, read, and download a wide range of books in one convenient
          hub
        </p>
        <div className="flex gap-6">
          <button className="px-6 py-3 bg-white rounded-full text-green-400 hover:text-green-500 transition font-semibold md:text-xl">
            Start for free
          </button>
          <button className="px-6 py-3 bg-white rounded-full text-green-500 hover:text-green-400 transition font-semibold md:text-xl">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Top;
