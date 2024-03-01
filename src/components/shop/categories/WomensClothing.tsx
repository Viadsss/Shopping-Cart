import { Link } from "react-router-dom";
import useProducts from "../../../utils/useProducts";
import { IProduct } from "../../../utils/types";
import { IconStarFilled } from "@tabler/icons-react";
import hasDecimal from "../../../utils/hasDecimal";
import LoadingCategory from "./LoadingCategory";

interface Props {
  sortBy: string;
  sortProduct: (sortBy: string, products: IProduct[]) => IProduct[];
}

const WomensClothing: React.FC<Props> = ({ sortBy, sortProduct }) => {
  const { products, error, loading } = useProducts("women's clothing");

  if (error) return <p>Error in fetching Women's Clothing products</p>;
  if (loading) return <LoadingCategory />;

  const sortedProducts = sortProduct(sortBy, products);

  return (
    <div className="mb-32">
      <div className="mb-2 font-bold">{sortedProducts.length} items</div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sortedProducts.map((product) => (
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
    </div>
  );
};

export default WomensClothing;
