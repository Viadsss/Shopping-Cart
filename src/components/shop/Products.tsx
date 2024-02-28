import AllProducts from "./categories/AllProducts";
import Electronics from "./categories/Electronics";
import ErrorCategory from "./categories/ErrorCategory";
import Jewelery from "./categories/Jewelery";
import MensClothing from "./categories/MensClothing";
import WomensClothing from "./categories/WomensClothing";
import SearchProducts from "./categories/SearchProducts";
import { useState } from "react";
import { IProduct } from "../../utils/types";

interface Props {
  category: string | undefined;
  searchValue: string;
}

const Products: React.FC<Props> = ({ category, searchValue }) => {
  const [sortBy, setSortBy] = useState("default");

  const sortProduct = (sortBy: string, products: IProduct[]) => {
    const currentProdcuts = [...products];

    switch (sortBy) {
      case "asc":
        return currentProdcuts.sort((a, b) => a.title.localeCompare(b.title));
      case "dsec":
        return currentProdcuts.sort((a, b) => b.title.localeCompare(a.title));
      case "lowest":
        return currentProdcuts.sort((a, b) => a.price - b.price);
      case "highest":
        return currentProdcuts.sort((a, b) => b.price - a.price);
      default:
        return products;
    }
  };

  return (
    <>
      <label>
        Sort by:
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="default">Default</option>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
          <option value="lowest">Lowest (Price)</option>
          <option value="highest">Highest (Price)</option>
        </select>
      </label>
      {category === undefined ? (
        <AllProducts sortBy={sortBy} sortProduct={sortProduct} />
      ) : category === "electronics" ? (
        <Electronics sortBy={sortBy} sortProduct={sortProduct} />
      ) : category === "jewelery" ? (
        <Jewelery sortBy={sortBy} sortProduct={sortProduct} />
      ) : category === "mens_clothing" ? (
        <MensClothing sortBy={sortBy} sortProduct={sortProduct} />
      ) : category === "womens_clothing" ? (
        <WomensClothing sortBy={sortBy} sortProduct={sortProduct} />
      ) : category === "search" ? (
        <SearchProducts
          sortBy={sortBy}
          sortProduct={sortProduct}
          searchValue={searchValue}
        />
      ) : (
        <ErrorCategory />
      )}
    </>
  );
};

export default Products;
