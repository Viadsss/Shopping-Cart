import { useParams } from "react-router-dom";
import Category from "./components/shop/Category";
import Products from "./components/shop/Products";

interface Props {
  searchValue: string;
}

const Shop: React.FC<Props> = ({ searchValue }) => {
  const { category } = useParams();

  return (
    <div>
      <h1>Shop</h1>
      <Category category={category} />
      <Products category={category} searchValue={searchValue} />
    </div>
  );
};

export default Shop;
