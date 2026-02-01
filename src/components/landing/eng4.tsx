const steps = [
  {
    id: 1,
    title: "Pick your vibe",
    description:
      "Choose activities that match your interests and energy",
  },
  {
    id: 2,
    title: "Join a group",
    description:
      "Connect with others who are just as excited as you are",
  },
  {
    id: 3,
    title: "Show up & shine",
    description:
      "Meet in person, have fun, and build real friendships",
  },
] as const;

export default function Eng4() {
  return (
    <section className="bg-[#FDF8FC] px-6 py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <header className="text-center">
          <h2 className="text-[1.75rem] font-bold leading-tight text-[#1A1A1A] md:text-[2rem] lg:text-[2.25rem]">
            Simple as{" "}
            <span className="text-[#8B5CF6]">1</span>
            <span className="text-[#A78BFA]">-</span>
            <span className="text-[#C084FC]">2</span>
            <span className="text-[#A78BFA]">-</span>
            <span className="text-[#EC4899]">3</span>
          </h2>
        </header>

        <div className="mt-12 flex flex-col gap-8 lg:mt-16 lg:gap-10">
          {steps.map(({ id, title, description }) => (
            <div
              key={id}
              className="flex items-center gap-6"
            >
              <div
                className="flex h-16 w-16 shrink-0 -rotate-2 items-center justify-center rounded-2xl text-white shadow-md transition-transform duration-200 hover:rotate-0 md:h-[4.25rem] md:w-[4.25rem]"
                style={{
                  background: "linear-gradient(180deg, #F89B37 0%, #EC4899 100%)",
                }}
              >
                <span className="text-xl font-bold md:text-2xl">{id}</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-[#1A1A1A]">{title}</h3>
                <p className="mt-1 text-base font-normal leading-relaxed text-neutral-600">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
