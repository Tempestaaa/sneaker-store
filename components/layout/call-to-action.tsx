export default function CallToAction() {
  return (
    <article className="h-160 bg-gradient-to-t from-primary to-background relative">
      <div className="absolute top-0 left-0 size-full bg-[url('/hero.png')] bg-center bg-no-repeat" />

      <div className="flex flex-col justify-between absolute top-0 bottom-0 left-0">
        <div className="p-8 text-2xl font-medium text-accent">
          <p>For you.</p>
          <p>For them.</p>
          <p>For everyone.</p>
        </div>

        <h1 className="text-[16rem] font-bold leading-46 tracking-tighter text-background">
          Sneakers
        </h1>
      </div>
    </article>
  );
}
