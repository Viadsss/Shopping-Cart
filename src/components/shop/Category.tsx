import { IconX } from "@tabler/icons-react";
import { Link, useNavigate } from "react-router-dom";

interface Props {
  category: string | undefined;
}

const Category: React.FC<Props> = ({ category }) => {
  const navigate = useNavigate();

  const clearCategory = () => {
    navigate("/shop");
  };

  return (
    <div className="w-60 border-r border-gray-200 px-2 py-8 pr-2 leading-5 md:pr-4">
      <div className="sticky top-20 block">
        <div className="mb-4 font-satoshiBold text-xl">Categories</div>
        {category && category !== "search" && (
          <button
            className="ease text-md my-2 flex w-full items-center gap-x-1 border border-red-500 bg-red-50 px-3 py-2 text-red-500 transition duration-200 hover:border-red-600 hover:bg-red-100 hover:text-red-600"
            onClick={clearCategory}
          >
            <IconX />
            <p>Clear Category</p>
          </button>
        )}
        <ul className="font-semibold text-gray-500">
          <li
            className={`mb-1 rounded px-2 ${category === "electronics" ? "bg-gray-800 py-3 text-white" : "py-2 hover:bg-gray-200 hover:text-gray-800"}`}
          >
            <Link to="/shop/electronics" className="block">
              Electronics
            </Link>
          </li>
          <li
            className={`mb-1 rounded px-2 ${category === "jewelery" ? "bg-gray-800 py-3 text-white" : "py-2 hover:bg-gray-200 hover:text-gray-800"}`}
          >
            <Link to="/shop/jewelery" className="block">
              Jewelery
            </Link>
          </li>
          <li
            className={`mb-1 rounded px-2 ${category === "mens_clothing" ? "bg-gray-800 py-3 text-white" : "py-2 hover:bg-gray-200 hover:text-gray-800"}`}
          >
            <Link to="/shop/mens_clothing" className="block">
              Men's Clothing
            </Link>
          </li>
          <li
            className={`mb-1 rounded px-2 ${category === "womens_clothing" ? "bg-gray-800 py-3 text-white" : "py-2 hover:bg-gray-200 hover:text-gray-800"}`}
          >
            <Link to="/shop/womens_clothing" className="block">
              Women's Clothing
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Category;
