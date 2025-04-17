import Link from "next/link";
import { PiSneakerFill } from "react-icons/pi";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex-center justify-center-safe gap-2 text-2xl font-bold"
    >
      <PiSneakerFill className="size-8" />
      <span>Sneaker Vault</span>
    </Link>
  );
}
