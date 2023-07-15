import { categories } from "../../public/categories";

const Categories = () => {
  return (
    <div className="container mx-auto my-32">
      <h1 className="text-5xl font-semibold text-center mb-20">Book Genres</h1>
      <div
        className="columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4 
      [&>div:not(:first-child)]:mt-5 
        lg:[&>div:not(:first-child)]:mt-8 
        
        "
      >
        {categories.map((category) => (
          <Category category={category} />
        ))}
      </div>
    </div>
  );
};

export default Categories;

interface CategoryProps {
  category: {
    name: string;
    img: string;
  };
}
const Category: React.FC<CategoryProps> = ({ category }) => {
  const { name, img } = category;

  return (
    <div className="relative bg-gradient-to-tr from-gray-900 to-green-50">
      <img className="rounded-sm  mix-blend-overlay" src={img} alt="" />
      {/* <h1>{name}</h1> */}
      <div className="absolute inset-0 flex items-end p-8 ">
        <h2 className="text-white text-4xl transition font-bold cursor-pointer  hover:text-green-500">
          {name}
        </h2>
      </div>
    </div>
  );
};
