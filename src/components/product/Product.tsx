import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IProduct } from "../../utils/types";
import { IconShoppingCartPlus, IconStarFilled } from "@tabler/icons-react";
import hasDecimal from "../../utils/hasDecimal";
import LoadingCategory from "../shop/categories/LoadingCategory";
import ErrorProduct from "./ErrorProduct";

interface Props {
  addToCart: (product: IProduct) => void;
}

const Product: React.FC<Props> = ({ addToCart }) => {
  const [product, setProduct] = useState<IProduct>(Object);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!res.ok) throw new Error("server error");
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (error) return <ErrorProduct />;
  if (loading) return <LoadingCategory />;

  return (
    <div className="h-full min-h-screen bg-gray-100 px-24 py-8">
      <div className="grid grid-cols-2 rounded-lg bg-white p-4 shadow-xl">
        <div className="flex items-center justify-center">
          <img className="h-64 w-full object-contain" src={product.image} />
        </div>
        <div className="flex flex-col p-2">
          <div className="mb-2 font-satoshiBold text-4xl font-bold">
            {product.title}
          </div>
          <div className="mb-2 flex items-center gap-x-2">
            <IconStarFilled className="text-yellow-400" />
            <span className="ml-1 text-lg">{product.rating.rate} </span>
            <span className="text-sm text-slate-400">
              ({product.rating.count} reviews)
            </span>
          </div>
          <div className="m-2 font-satoshiBold text-2xl">
            $
            {hasDecimal(product.price)
              ? product.price.toFixed(2)
              : product.price}
          </div>
          <div className="mb-5 border-b-2 pb-2 text-gray-500">
            {product.description}
          </div>

          <button
            className="flex w-3/4 items-center justify-center gap-x-2 self-center rounded-full bg-black py-3 text-white"
            onClick={() => addToCart(product)}
          >
            <IconShoppingCartPlus />
            <div>Add to Cart</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
