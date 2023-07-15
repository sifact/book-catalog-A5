import { books } from "../../public/recentBooks";

const RecentBooks = () => {
  return (
    <div>
      <h1 className="text-5xl font-semibold text-center mb-20">Recent Books</h1>
      <div className="my-32 grid grid-cols-1 md:grid-cols-2  gap-32 container mx-auto">
        {books.map((book) => (
          <RecentBook book={book} />
        ))}
      </div>
    </div>
  );
};

export default RecentBooks;

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
const RecentBook: React.FC<BookProps> = ({ book }) => {
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
      <div className="bg-green-100 max-w-fit p-6 rounded-md space-y-3 absolute bottom-[-20%] right-[-1%]">
        <h1 className="text-2xl font-semibold">Title: {title}</h1>
        <div className="opacity-60 font-semibold">
          <p>By: {author}</p>
          <p>Published Date: {published}</p>
        </div>
      </div>
    </div>
  );
};
