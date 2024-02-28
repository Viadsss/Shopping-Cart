import { Link } from "react-router-dom";
import useProducts from "../utils/useProducts";
import { IProduct } from "../utils/types";

interface Props {
  sortBy: string;
  sortProduct: (sortBy: string, products: IProduct[]) => IProduct[];
  searchValue: string;
}

const SearchProducts: React.FC<Props> = ({
  sortBy,
  sortProduct,
  searchValue,
}) => {
  const { products, error, loading } = useProducts("");

  if (error) return <p>Error in fetching all of the products</p>;
  if (loading) return <p>Loading...</p>;

  const filterProduct = (products: IProduct[], input: string) => {
    const filteredProduct = products.filter((product) =>
      product.title.toLowerCase().includes(input.toLowerCase()),
    );

    return filteredProduct;
  };

  const sortedProducts = sortProduct(sortBy, products);
  const filteredProducts = filterProduct(sortedProducts, searchValue);

  return (
    <div>
      <div>Showing results for:</div>
      <div>
        {searchValue} ({filteredProducts.length})
      </div>
      <ul>
        {filteredProducts.length !== 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id}>
              <li>{product.title}</li>
              <div>{product.price}</div>
              <Link to={`/product/${product.id}`}>
                {/* <img src={product.image} /> */}
                <div>Product image here</div>
              </Link>
            </div>
          ))
        ) : (
          <li>No items found, please try again.</li>
        )}
      </ul>
    </div>
  );
};

export default SearchProducts;
