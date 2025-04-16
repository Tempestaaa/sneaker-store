import ProductCard from "@/components/products/product-card";

type Props = {
  isInverted: boolean;
};

export default function ProductBento({ isInverted }: Props) {
  return (
    <section className="grid grid-cols-4 grid-rows-2 gap-4">
      {isInverted ? (
        <>
          {[...Array(4)].map((_, id) => (
            <ProductCard key={id} isInverted />
          ))}

          <div className="col-span-2 row-span-2 col-start-3 row-start-1 h-160">
            <ProductCard isInverted />
          </div>
        </>
      ) : (
        <>
          <div className="col-span-2 row-span-2 h-160">
            <ProductCard />
          </div>

          {[...Array(4)].map((_, id) => (
            <ProductCard key={id} />
          ))}
        </>
      )}
    </section>
  );
}
