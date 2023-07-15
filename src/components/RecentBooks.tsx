import { books } from "../../public/recentBooks";

const RecentBooks = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  gap-20 container mx-auto">
      {books.map((book) => (
        <RecentBook book={book} />
      ))}
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
      <div className="h-[300px] ">
        <img
          className="object-cover w-full h-full rounded-md"
          src={img}
          alt=""
        />
      </div>
      <div className="bg-gray-200 max-w-fit p-6 rounded-md space-y-3 absolute -bottom-16 -right-32">
        <h1 className="text-2xl font-semibold">Title: {title}</h1>
        <p>By: {author}</p>
        <p>Published Date: {published}</p>
      </div>
    </div>
  );
};
