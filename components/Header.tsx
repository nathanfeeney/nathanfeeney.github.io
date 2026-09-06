'use client';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="flex items-center justify-between px-6 py-5 sticky top-0 z-50 bg-[var(--bg)]/90 backdrop-blur border-b border-[var(--border)]">
      <div className="text-lg font-semibold">
        Nathan Feeney<span className="text-[var(--red)]">.</span>
      </div>

      <nav className="flex items-center gap-4">
        <button
          className={`burger md:hidden flex flex-col gap-1 p-2 ${open ? 'open' : ''}`}
          id="burger-btn"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span className="block w-5 h-0.5 bg-[var(--text)]" />
          <span className="block w-5 h-0.5 bg-[var(--text)]" />
          <span className="block w-5 h-0.5 bg-[var(--text)]" />
        </button>

        <ThemeToggle />

        <div
          className={`nav-links flex-col md:flex-row md:flex gap-6 items-center absolute md:static top-full left-0 w-full md:w-auto bg-[var(--bg)] md:bg-transparent border-b md:border-0 border-[var(--border)] px-6 md:px-0 py-4 md:py-0 ${
            open ? 'flex' : 'hidden'
          }`}
          id="nav-links"
        >
          <a href="#" onClick={close} className="hover:text-[var(--red)]">Home</a>
          <a href="#about" onClick={close} className="hover:text-[var(--red)]">About</a>
          <a href="#projects" onClick={close} className="hover:text-[var(--red)]">Work</a>
          <a
            href="#contact"
            onClick={close}
            className="px-4 py-2 rounded-[var(--radius)] bg-[var(--red)] text-white hover:bg-[var(--red-lt)]"
          >
            Contact me
          </a>
        </div>
      </nav>
    </header>
  );
}
