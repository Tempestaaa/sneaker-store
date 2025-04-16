import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  HiOutlineMenuAlt1,
  HiOutlineSearch,
  HiOutlineShoppingBag,
} from "react-icons/hi";

export default function Navbar() {
  return (
    <nav className="flex-center gap-4 justify-between h-16 px-4">
      <Sheet>
        <section className="">
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <HiOutlineMenuAlt1 className="size-6" />
            </Button>
          </SheetTrigger>
        </section>

        <SheetContent side="left">
          <SheetTitle>Hi, Im Steve</SheetTitle>
        </SheetContent>

        <section className="flex-center gap-4">
          <label htmlFor="search">
            <form className="flex-center justify-end gap-2 border-2 border-muted has-[:focus]:border-primary duration-300 px-4 rounded-full">
              <HiOutlineSearch className="size-6" />

              <Input
                placeholder="Search..."
                className="w-40 focus:w-80 transition-[width] duration-300 border-0 shadow-none px-2"
              />
            </form>
          </label>

          <Button variant="ghost" size="icon">
            <HiOutlineShoppingBag className="size-6" />
          </Button>
        </section>
      </Sheet>
    </nav>
  );
}
