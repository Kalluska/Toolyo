"use client";

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subject: string;
};

export default function ContactModal({
  isOpen,
  onClose,
  title,
  subject,
}: ContactModalProps) {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-[60] bg-black/50"
        onClick={onClose}
      />
      <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
        <div className="w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-sm font-semibold uppercase tracking-wide text-zinc-400">
                Toolyo
              </div>
              <h3 className="mt-1 text-2xl font-bold">{title}</h3>
              <p className="mt-2 text-sm text-zinc-600">
                Send a message directly from the site.
              </p>
            </div>

            <button
              onClick={onClose}
              className="rounded-xl border border-zinc-200 px-3 py-2 text-sm hover:border-zinc-400"
            >
              Close
            </button>
          </div>

          <form
            action="https://formspree.io/f/xeerobel"
            method="POST"
            className="mt-6 space-y-4"
          >
            <input type="hidden" name="_subject" value={subject} />

            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-700">
                Your email
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-2xl border border-zinc-200 px-4 py-3 outline-none focus:border-zinc-400"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-700">
                Message
              </label>
              <textarea
                name="message"
                required
                placeholder="Write your message here..."
                className="min-h-[180px] w-full rounded-2xl border border-zinc-200 px-4 py-3 outline-none focus:border-zinc-400"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-2xl bg-black px-5 py-3 font-semibold text-white transition hover:opacity-90"
            >
              Send message
            </button>
          </form>

          <p className="mt-4 text-xs text-zinc-500">
            To make sending work, replace <span className="font-mono">your-form-id</span> with your real Formspree form ID.
          </p>
        </div>
      </div>
    </>
  );
}
