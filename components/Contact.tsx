const LINKS = [
  { label: 'Email', value: 'TNFeeney@hotmail.com', href: 'mailto:TNFeeney@hotmail.com' },
  { label: 'LinkedIn', value: 'linkedin.com/in/thomasfeeney', href: 'https://www.linkedin.com/in/thomasfeeney/' },
  { label: 'GitHub', value: 'github.com/nathanfeeney', href: 'https://github.com/nathanfeeney' },
];

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-20 max-w-6xl mx-auto">
      <div className="reveal grid md:grid-cols-2 gap-10">
        <div>
          <div className="text-sm uppercase tracking-wide text-[var(--text-3)] mb-4">Get In Touch</div>
          <h2 className="text-3xl font-bold mb-4">
            Let's work<br />on something <span className="text-[var(--red)]">great.</span>
          </h2>
          <p className="text-[var(--text-2)]">
            Currently working full-time, but always happy to connect, talk shop, or hear about
            interesting ideas. Feel free to drop me a message — I'll get back to you when I can.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener' : undefined}
              className="flex items-center gap-4 p-4 rounded-[var(--radius)] border border-[var(--border)] hover:border-[var(--red)] transition-colors"
            >
              <div>
                <div className="text-xs uppercase tracking-wide text-[var(--text-3)]">{link.label}</div>
                <div className="font-medium">{link.value}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
