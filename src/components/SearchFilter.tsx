import { useState } from "react";
import down from "../../public/images/down.png";
import search from "../../public/images/search.png";
import { Link } from "react-router-dom";
import { IBook } from "../types/book";
import { useGetFilterTermsQuery } from "../redux/api/apiSlice";

interface ISearchFilterProps {
  filters: IFilters;
  setFilters: React.Dispatch<React.SetStateAction<IFilters>>;
  refetch: any;
}

const SearchFilter: React.FC<ISearchFilterProps> = ({
  filters,
  setFilters,
  refetch,
}) => {
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState("Filter");
  const [year, setYear] = useState(false);
  const [genre, setGenre] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const { data } = useGetFilterTermsQuery(undefined);

  const handleSearch = () => {
    setFilters({ ...filters, year: "", genre: "", search: searchTerm });
  };

  return (
    <div className="flex justify-center gap-12 items-center">
      <div className="bg-white rounded-md p-4 text-xl flex justify-center items-center">
        <input
          className="outline-none border-none text-black"
          type="text"
          placeholder="Search by genre, name"
          onChange={(e: any) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>
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
              data.map((book: IBook) => {
                return (
                  <>
                    <span
                      className="cursor-pointer"
                      onClick={() => {
                        setFilter(book.genre);
                        setFilters({
                          ...filters,
                          search: "",
                          year: "",
                          genre: book.genre,
                        });
                        setOpen(false);
                      }}
                      key={book._id}
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
              published years
            </div>
            {year && <hr />}
            {year &&
              data.map((book: IBook) => {
                return (
                  <>
                    <span
                      className="cursor-pointer"
                      key={book._id}
                      onClick={() => {
                        setFilter(book.year);
                        setFilters({
                          ...filters,
                          search: "",
                          genre: "",
                          year: book.year,
                        });
                        setOpen(false);
                      }}
                    >
                      {book.year}
                    </span>
                  </>
                );
              })}
          </div>
        )}
      </div>
      <button className="px-6 py-4 bg-white rounded-lg text-black transition f md:text-xl ">
        <Link to="/addBook">Add Book</Link>
      </button>
    </div>
  );
};

export default SearchFilter;
