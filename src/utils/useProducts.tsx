import { useEffect, useState } from "react";
import { IProduct } from "./types";

const useProducts = (category: string) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductCategory = async () => {
      try {
        const res = await fetch(
          `https://fakestoreapi.com/products/category/${category}`,
        );
        if (!res.ok) throw new Error("server error");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    const fetchProductAll = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) throw new Error("server error");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    if (category !== "") fetchProductCategory();
    else fetchProductAll();
  }, [category]);

  return { products, error, loading };
};

export default useProducts;
