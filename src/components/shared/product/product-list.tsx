import { Product } from "@/types";
import ProductCard from "./product-card";

const ProductList = ({
  data,
  title,
  limit,
}: {
  data: Product[];
  title?: string;
  limit?: number;
}) => {
  const limitedData = limit ? data.slice(0, 4) : data;
  return (
    <div className="my-10">
      <h2 className="h2-bold mb-4">{title}</h2>
      {data.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {limitedData.map((products: Product, productsIndex: number) => {
            return <ProductCard product={products} key={productsIndex} />;
          })}
        </div>
      ) : (
        <div>No Products Found...</div>
      )}
    </div>
  );
};

export default ProductList;