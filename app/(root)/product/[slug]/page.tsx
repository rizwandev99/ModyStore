import ProductPrice from "@/components/shared/product/product-price";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getProductBySlug } from "@/lib/actions/product.actions";
import { notFound } from "next/navigation";

const ProductDetailsPage = async (props: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await props.params;

  const product = await getProductBySlug(slug);

  if (!product) {
    return notFound();
  }
  return (
    <section className="grid grid-cols-1 md:grid-cols-5 ml-2">
      <div className="col-span-2">{/* Image part */}</div>
      <div className="col-span-2 ">
        <div className="flex flex-col gap-4">
          <p>
            {product.brand} {product.category}
          </p>
          <h1 className="h1-bold">{product.name}</h1>
          <p>Rating Stars</p>
          <p>{product.numReviews} reviews</p>
          <div>
            <ProductPrice
              value={Number(product.price)}
              className="bg-green-100 rounded-full w-fit px-4 py-1 text-green-800"
            />
          </div>
          <div>
            <p className="font-bold">Description</p>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
      <div>
        <Card>
          <CardContent className="py-2 flex flex-col gap-3">
            <div className="flex flex-between ">
              <p>Price</p>
              <p>
                <ProductPrice value={Number(product.price)} />
              </p>
            </div>
            <div className="flex flex-between">
              <p>Status</p>
              {product.stock > 0 ? (
                <Badge variant={"outline"} className="px-6">
                  {product.stock}
                </Badge>
              ) : (
                <Badge variant={"destructive"} className="px-4">
                  Out of stock
                </Badge>
              )}
            </div>
            {product.stock > 0 && <Button>+ Add to cart</Button>}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProductDetailsPage;
