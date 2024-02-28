import { Link } from "react-router-dom";
import useProducts from "../utils/useProducts";
import { IProduct } from "../utils/types";

interface Props {
  sortBy: string;
  sortProduct: (sortBy: string, products: IProduct[]) => IProduct[];
}

const WomensClothing: React.FC<Props> = ({ sortBy, sortProduct }) => {
  const { products, error, loading } = useProducts("women's clothing");

  if (error) return <p>Error in fetching Women's Clothing products</p>;
  if (loading) return <p>Loading...</p>;

  const sortedProducts = sortProduct(sortBy, products);

  return (
    <div>
      <div>{sortedProducts.length} items</div>
      <ul>
        {sortedProducts.map((product) => (
          <div key={product.id}>
            <li>{product.title}</li>
            <Link to={`/product/${product.id}`}>
              {/* <img src={product.image} /> */}
              <div>Product image here</div>
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default WomensClothing;
