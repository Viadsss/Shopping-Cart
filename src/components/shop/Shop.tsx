import { useParams } from "react-router-dom";
import Category from "./Category";
import Products from "./Products";

interface Props {
  searchValue: string;
}

const Shop: React.FC<Props> = ({ searchValue }) => {
  const { category } = useParams();

  return (
    <div className="flex h-full min-h-screen px-8 md:px-24">
      <Category category={category} />
      <Products category={category} searchValue={searchValue} />
    </div>
  );
};

export default Shop;
