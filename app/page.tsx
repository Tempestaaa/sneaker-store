import CallToAction from "@/components/layout/call-to-action";
import Hero from "@/components/layout/hero";
import ProductCollection from "@/components/products/product-collection";

export default function HomePage() {
  return (
    <div className="">
      <Hero />
      <ProductCollection heading="Men's Collection" />
      <ProductCollection heading="Women's Collection" isInverted />
      <ProductCollection heading="Kids's Collection" />
      <CallToAction />
    </div>
  );
}
