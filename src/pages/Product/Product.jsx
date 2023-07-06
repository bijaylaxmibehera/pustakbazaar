import "./Product.css";
import { useContext } from "react";
import { DataContext, FilterContext } from "../../";
import { ProductCard } from "../../component/ProductCard/ProductCard";
import { FilterBar } from "../../component/FilterBar/FilterBar";

export function Product() {
  const { products } = useContext(DataContext);
  const { filters } = useContext(FilterContext);

  const filteredProducts =products
    .filter(
      (item) =>
        filters.priceRange === 0 ||
        ((filters.category.length === 0 ||
          filters.category.includes(item.category)) &&
          (filters.rating === "" || item.rating >= filters.rating) &&
          // (filters.priceRange === 0 ||
          item.price <= filters.priceRange &&
          item.price >= 0 &&
          (filters.search.length === 0 ||
            item.name.toLowerCase().includes(filters.search)))
    )
    .sort((a, b) =>
      filters.priceSort === "asc"
        ? a.price - b.price
        : filters.priceSort === "dsc"
        ? b.price - a.price
        : 0
    );

  //  const products=state.products;

  //  console.log(products)

  return (
    <>
      {/* <h1>Product page</h1> */}
      <div className="product-page">
        <div className="filters-bar">
          <FilterBar />
        </div>
        <ul className="product-list">
          {filteredProducts.length > 0 ? (
            <div className="responsive-grid">
              {filteredProducts.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          ) : (
            <p className="not-availed-products">No product available</p>
          )}
        </ul>
      </div>
    </>
  );
}
