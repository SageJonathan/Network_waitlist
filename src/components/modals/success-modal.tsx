import Link from "next/link";

export type SuccessModalAction = {
  label: string;
  href: string;
  onClose?: () => void;
};

type SuccessModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  message: string;
  primaryAction: SuccessModalAction;
  secondaryAction?: SuccessModalAction;
};

export default function SuccessModal({
  open,
  onClose,
  title,
  message,
  primaryAction,
  secondaryAction,
}: SuccessModalProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="success-modal-title"
    >
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
        aria-hidden
      />
      <div className="relative w-full max-w-md rounded-3xl border border-neutral-200 bg-white p-8 shadow-xl">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FFEEDD]">
            <span className="text-2xl" aria-hidden>
              ✓
            </span>
          </div>
          <div>
            <h2
              id="success-modal-title"
              className="text-xl font-bold text-[#1A1A1A] md:text-2xl"
            >
              {title}
            </h2>
            <p className="mt-2 text-base leading-relaxed text-neutral-600">
              {message}
            </p>
          </div>
          <div className="flex w-full flex-col gap-3">
            <Link
              href={primaryAction.href}
              className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#F89B37] to-[#F4529B] px-6 py-3 font-semibold text-white transition-all hover:from-[#F89B37] hover:to-[#dc2626] focus:outline-none focus:ring-2 focus:ring-[#F89B37] focus:ring-offset-2"
              onClick={primaryAction.onClose}
            >
              {primaryAction.label}
            </Link>
            {secondaryAction && (
              <Link
                href={secondaryAction.href}
                className="inline-flex w-full items-center justify-center rounded-full border-2 border-neutral-300 bg-white px-6 py-3 font-semibold text-neutral-700 transition-colors hover:border-neutral-400 hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2"
                onClick={secondaryAction.onClose}
              >
                {secondaryAction.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
