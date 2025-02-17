import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";

const Homepage = async () => {
  const sampleData = await getLatestProducts();
  console.log("Dummy Products", sampleData);
  return (
    <div>
      <ProductList data={sampleData} title="Newest Arrivals" limit={4} />
      Prostore...
    </div>
  );
};

export default Homepage;