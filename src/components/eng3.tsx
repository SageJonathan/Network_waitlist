import Image from "next/image";

export default function Eng3() {
  return (
    <section className="bg-[#FDF9F0] px-6 py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <header className="mx-auto max-w-2xl text-center">
          <h2 className="text-[1.75rem] font-bold leading-tight text-[#1A1A1A] md:text-[2rem] lg:text-[2.25rem]">
            This is how we{" "}
            <span className="bg-gradient-to-r from-[#F89B37] to-[#F4529B] bg-clip-text text-transparent">
              connect
            </span>
          </h2>
        </header>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-16 lg:gap-8">
          {/* Left tile: beach / group fitness */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-200">
            <Image
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop"
              alt="Group fitness activity on the beach"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Right tile: group portrait outdoors */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-200">
            <Image
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop"
              alt="Group of friends outdoors"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
