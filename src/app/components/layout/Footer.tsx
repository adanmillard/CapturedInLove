export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold tracking-wide text-white">
              Captured In Love
            </p>
            <p className="mt-1 text-sm text-white/60 max-w-sm">
              Wedding & lifestyle storytelling, captured honestly.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-white/50 hidden md:block">
              Follow
            </span>
            <a
              href="https://instagram.com/capturedinlovemedia"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="group"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition group-hover:border-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 text-white/70 transition group-hover:text-white"
                >
                  <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zm0 1.5h8.5a4.25 4.25 0 014.25 4.25v8.5a4.25 4.25 0 01-4.25 4.25h-8.5A4.25 4.25 0 013.5 16.25v-8.5A4.25 4.25 0 017.75 3.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 1.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm5.25-.75a1 1 0 100 2 1 1 0 000-2z" />
                </svg>
              </div>
            </a>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/10 text-center md:text-left text-xs text-white/40">
          © {new Date().getFullYear()} Captured In Love. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
