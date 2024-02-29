import { Link } from "react-router-dom";
import useProducts from "../../../utils/useProducts";
import { IProduct } from "../../../utils/types";
import hasDecimal from "../../../utils/hasDecimal";
import { IconStarFilled } from "@tabler/icons-react";
import LoadingCategory from "./LoadingCategory";


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
  if (loading) return <LoadingCategory />;


  const filterProduct = (products: IProduct[], input: string) => {
    const filteredProduct = products.filter((product) =>
      product.title.toLowerCase().includes(input.toLowerCase()),
    );

    return filteredProduct;
  };

  const sortedProducts = sortProduct(sortBy, products);
  const filteredProducts = filterProduct(sortedProducts, searchValue);

  return (
    <div className="mb-32">
      <div>Showing results for:</div>
      <div className="mb-2 font-satoshiBold text-xl">
        {searchValue} ({filteredProducts.length})
      </div>
      {filteredProducts.length !== 0 ? (
        <div className="grid grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Link
              className="flex flex-col gap-y-2 rounded-lg p-3 hover:shadow-xl"
              key={product.id}
              to={`/product/${product.id}`}
            >
              <img className="h-48 w-full object-contain" src={product.image} />
              <div>{product.title}</div>
              <div className="flex items-center gap-x-2">
                <IconStarFilled className="text-yellow-400" />
                <span className="ml-1 text-lg">{product.rating.rate} </span>
                <span className="text-sm text-slate-400">
                  ({product.rating.count})
                </span>
              </div>
              <div className="mt-auto font-satoshiBold text-xl">
                $
                {hasDecimal(product.price)
                  ? product.price.toFixed(2)
                  : product.price}
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="pb-32">No items found, please try again.</div>
      )}
    </div>
  );
};

export default SearchProducts;
