import ProductCard from "@/components/products/product-card";

type Props = {
  isInverted: boolean;
};

export default function ProductBento({ isInverted }: Props) {
  return (
    <section className="grid-bento">
      {[...Array(5)].map((_, id) => (
        <ProductCard key={id} isInverted={isInverted} />
      ))}
    </section>
  );
}
