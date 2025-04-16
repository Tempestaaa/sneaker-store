import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi";

type Props = {
  heading: string;
  href?: string;
};

export default function ProductHeading({ heading, href }: Props) {
  const CustomButton = (
    <Button className="bg-background border-accent hover:bg-accent hover:text-foreground">
      <p>Explore Collection</p>
      <HiOutlineArrowRight className="size-6" />
    </Button>
  );

  return (
    <div className="flex-center gap-4 justify-between text-accent">
      <header className="font-bold text-4xl">{heading}</header>

      {href ? <Link href={href}>{CustomButton}</Link> : CustomButton}
    </div>
  );
}
