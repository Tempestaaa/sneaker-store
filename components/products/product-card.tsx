import Image from "next/image";
import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

type Props = {
  isInverted?: boolean;
};

export default function ProductCard({ isInverted = false }: Props) {
  return (
    <div
      className={`${
        isInverted ? "inverted-item" : "item"
      } p-4 relative size-full group overflow-hidden bg-radial from-background to-primary min-h-80`}
    >
      <Image
        src="/hero.png"
        alt="test image"
        fill
        className={`${isInverted && "scale-x-[-1]"}`}
      />

      {/* <Link href={`/product/1`}>
        <div className="size-full absolute top-0 -left-full group-hover:left-0 duration-500 bg-accent/60 grid-center group-hover:text-foreground">
          <MdOutlineKeyboardArrowRight className="size-4/5" />
        </div>
      </Link> */}

      <section className="absolute bottom-0 left-0 right-0 p-4 flex-center justify-between gap-4 text-foreground duration-500">
        <header>The Stride</header>
        <p>$190</p>
      </section>
    </div>
  );
}
