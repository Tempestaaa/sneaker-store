import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  const footers: { title: string; children: string[] }[] = [
    {
      title: "Company",
      children: ["About Us", "Size Guide", "Shipping & Return", "News"],
    },
    {
      title: "Catalog",
      children: [
        "Men's Collection",
        "Women's Collection",
        "Kids's Collection",
        "Sale",
      ],
    },
    {
      title: "Term & Policy",
      children: ["Terms of Service", "Privacy Policy", "Cookie Policy"],
    },
  ];

  return (
    <footer className="py-20 bg-background -mt-4 px-4 flex justify-between gap-4">
      <section className="flex gap-20">
        {footers.map((item, id) => (
          <div key={id} className="flex flex-col gap-4">
            <header className="text-lg font-bold text-accent">
              {item.title}
            </header>

            <div className="flex flex-col">
              {item.children.map((c, i) => (
                <p key={i} className="py-1">
                  {c}
                </p>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="flex flex-col gap-4">
        <header className="text-lg font-bold text-accent">
          Stay Connected
        </header>

        <p>
          Follow us for the latest update, new releases, and exclusive offers{" "}
          <br />
          Join the movement and step up your game with us.
        </p>

        <form className="flex-center gap-4 h-14 *:h-full">
          <Input
            placeholder="Email address"
            className="rounded-none border-0 border-b-2 border-b-muted shadow-none px-0"
          />

          <Button variant="inverted" className="py-0">
            Subcribe
          </Button>
        </form>
      </section>
    </footer>
  );
}
