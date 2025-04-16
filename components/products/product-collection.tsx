import ProductBento from "@/components/products/product-bento";
import ProductHeading from "@/components/products/product-header";

type Props = {
  heading: string;
  isInverted?: boolean;
};

export default function ProductCollection({
  heading,
  isInverted = false,
}: Props) {
  return (
    <article className="py-20 flex flex-col gap-12">
      <ProductHeading heading={heading} />
      <ProductBento isInverted={isInverted} />
    </article>
  );
}
