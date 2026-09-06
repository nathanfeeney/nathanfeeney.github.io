export default function Footer() {
  return (
    <footer className="flex flex-col sm:flex-row justify-between items-center gap-4 px-6 py-8 max-w-6xl mx-auto border-t border-[var(--border)] text-sm text-[var(--text-2)]">
      <span>
        © 2026 <strong className="text-[var(--text)]">Nathan Feeney</strong>
      </span>
      <div className="flex gap-5">
        <a href="https://github.com/nathanfeeney" target="_blank" rel="noopener" className="hover:text-[var(--red)]">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/thomasfeeney/" target="_blank" rel="noopener" className="hover:text-[var(--red)]">
          LinkedIn
        </a>
        <a href="mailto:TNFeeney@hotmail.com" className="hover:text-[var(--red)]">
          Email
        </a>
      </div>
    </footer>
  );
}
