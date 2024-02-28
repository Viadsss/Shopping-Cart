import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IProduct } from "./utils/types";

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

  if (error) return <p>Error in fetching this product</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <div>{product && product.title}</div>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default Product;
