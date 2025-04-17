import { Button } from "@/components/ui/button";
import Image from "next/image";
import { AiOutlineTikTok } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineArrowRight } from "react-icons/hi";
import { IoLogoInstagram } from "react-icons/io";

export default function Hero() {
  return (
    <article className="py-10">
      <header className="flex-center gap-16 justify-between">
        <h1 className="text-[16rem] font-bold leading-none tracking-tighter">
          Sneakers
        </h1>

        <div className="flex flex-col font-medium mt-10 flex-1 text-accent">
          <p>Premium materials.</p>
          <p>Timeless style.</p>
          <p>Unmatched comfort.</p>
        </div>
      </header>

      <section className="bg-gradient-to-b from-primary to-background h-160 -mt-9 grid place-items-center-safe">
        <div className="h-full w-[90%] flex *:flex-1 text-foreground">
          <section className="flex flex-col gap-2 h-4/5 mt-auto pb-8">
            <h6 className="text-4xl font-medium">Designed for movement.</h6>
            <h6 className="text-4xl font-medium">Build for life.</h6>

            <p className="mt-4 mb-12">
              Whether you're on the street or at a casual event,
              <br />
              our sneakers fit every occasion.
            </p>

            <Button className="w-fit">
              <p className="font-medium">Explore Collection</p>
              <HiOutlineArrowRight className="size-6" />
            </Button>

            <div className="flex-center mt-auto gap-4 *:size-6 text-primary">
              <AiOutlineTikTok />
              <IoLogoInstagram />
              <FaXTwitter />
              <FaFacebook />
            </div>
          </section>

          <section className="grid place-items-center-safe">
            <div className="relative size-full">
              <Image src="/hero.png" alt="hero image" fill />
            </div>
          </section>
        </div>
      </section>
    </article>
  );
}
