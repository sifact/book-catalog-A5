import { books } from "../../public/recentBooks";

const Books = () => {
  return (
    <div>
      <h1 className="text-5xl font-semibold text-center mb-20">Recent Books</h1>
      <div className="my-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 container mx-auto">
        {books.map((book) => (
          <Book book={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;

interface BookProps {
  book: {
    title: string;
    genre: string;
    author: string;
    desc: string;
    img: string;
    published: string;
  };
}
const Book: React.FC<BookProps> = ({ book }) => {
  const { img, title, author, published } = book;
  return (
    <div className="relative">
      <div className="h-[300px] w-[500px] bg-gradient-to-tr from-gray-900 to-green-50">
        <img
          className="object-cover w-full h-full rounded-md mix-blend-overlay"
          src={img}
          alt=""
        />
      </div>
      <div className="rounded-lg space-y-3 ">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <div className="opacity-60 font-semibold">
          <p>{author}</p>
          <p>{published}</p>
        </div>
      </div>
    </div>
  );
};
