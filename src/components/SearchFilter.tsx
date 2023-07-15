import { useState } from "react";
import down from "../../public/images/down.png";
import search from "../../public/images/search.png";

interface SearchFilterProps {
  title: string;
  genre: string;
  author: string;
  desc: string;
  img: string;
  published: string;
}

const SearchFilter: React.FC<{ books: SearchFilterProps[] }> = ({ books }) => {
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState("Filter");
  const [year, setYear] = useState(false);
  const [genre, setGenre] = useState(false);
  const [sort, setSort] = useState("sales");

  return (
    <div className="flex justify-center gap-12 items-center">
      <div className="bg-white rounded-md p-4 text-xl flex justify-center items-center">
        <input
          className="outline-none border-none text-black"
          type="text"
          placeholder="Search by genre, name"
        />
        <button>
          <img width={20} src={search} alt="" />
        </button>
      </div>
      <div className="relative">
        <div className="p-4 rounded-lg bg-white text-black text-xl flex items-center justify-between gap-4">
          <span>{filter}</span>
          <img src={down} width={20} alt="" onClick={() => setOpen(!open)} />
        </div>
        {open && (
          <div className=" flex flex-col gap-4 bg-white p-4 rounded-lg absolute top-16 shadow-lg text-black z-50  w-[300px]">
            <div
              className="cursor-pointer text-2xl"
              onClick={() => setGenre(!genre)}
            >
              Genre
            </div>
            <hr />
            {genre &&
              books.map((book) => {
                return (
                  <>
                    <span
                      className="cursor-pointer"
                      onClick={() => {
                        setFilter(book.genre);
                        setOpen(false);
                      }}
                    >
                      {book.genre}
                    </span>
                  </>
                );
              })}
            <div
              className="cursor-pointer text-2xl"
              onClick={() => setYear(!year)}
            >
              Published year
            </div>
            {year && <hr />}
            {year &&
              books.map((book) => {
                return (
                  <>
                    <span
                      className="cursor-pointer"
                      onClick={() => {
                        setFilter(book.published);
                        setOpen(false);
                      }}
                    >
                      {book.published}
                    </span>
                  </>
                );
              })}
          </div>
        )}
        {open && (
          <div className="rightMenu">
            {/* {sort === "sales" ? (
              <span onClick={() => reSort("createdAt")}>Newest</span>
            ) : (
              <span onClick={() => reSort("sales")}>Best Selling</span>
            )}
            <span onClick={() => reSort("sales")}>Popular</span> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchFilter;
