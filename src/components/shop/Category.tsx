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
    <div>
      {category && category !== "search" && (
        <button onClick={clearCategory}>Clear Category</button>
      )}
      <ul>
        <li>
          <Link to="/shop/electronics">Electronics</Link>
        </li>
        <li>
          <Link to="/shop/jewelery">Jewelery</Link>
        </li>
        <li>
          <Link to="/shop/mens_clothing">Men's Clothing</Link>
        </li>
        <li>
          <Link to="/shop/womens_clothing">Women's Clothing</Link>
        </li>
      </ul>
    </div>
  );
};

export default Category;
