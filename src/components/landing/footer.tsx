export default function Footer() {
  return (
    <footer
      className="relative px-6 py-8 md:py-9"
      style={{
        background: "#FCF9ED",
      }}
    >
      <div className="mx-auto flex max-w-md flex-col items-center gap-2 text-center">
        <div className="flex items-center justify-center">
          <img
            src="/Logo.png"
            alt="Humanae"
            width={120}
            height={28}
            className="h-7 w-auto shrink-0 md:h-8"
          />
        </div>
        <p className="text-sm text-neutral-700 md:text-base">
          Building better connections, one activity at a time
        </p>
        <p className="text-xs text-neutral-500">Calgary • 2026</p>
      </div>

      {/* Help button - bottom right */}
      <a
        href="#help"
        aria-label="Help"
        className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-neutral-200 text-neutral-600 transition-colors hover:bg-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 focus:ring-offset-transparent"
      >
        <span className="text-lg font-medium">?</span>
      </a>
    </footer>
  );
}
