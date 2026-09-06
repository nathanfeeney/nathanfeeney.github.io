export default function Hero() {
  return (
    <section id="hero" className="grid md:grid-cols-2 gap-10 px-6 py-20 max-w-6xl mx-auto items-center">
      <div>
        <div className="text-sm uppercase tracking-wide text-[var(--text-3)] mb-3">Developer</div>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          Hi, I'm<br />Nathan <span className="text-[var(--red)]">Feeney.</span>
        </h1>
        <p className="text-lg text-[var(--text-2)] mb-4">
          Full-Stack Developer · Umbraco Certified Expert
        </p>
        <p className="text-[var(--text-2)] mb-8">
          I build <strong>reliable, well-crafted web applications</strong> — from CMS
          platforms and clinical decision tools to interactive conference media. Based in
          the UK, with 4+ years across agencies, healthcare, and industrial tech.
        </p>
        <div className="flex gap-4">
          <a href="#experience" className="px-5 py-3 rounded-[var(--radius)] bg-[var(--red)] text-white hover:bg-[var(--red-lt)]">
            See My Work
          </a>
          <a href="#contact" className="px-5 py-3 rounded-[var(--radius)] border border-[var(--border)] hover:border-[var(--red)]">
            Get In Touch
          </a>
        </div>
      </div>

      <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-[var(--radius)] p-6 space-y-4">
        {[
          ['Current role', 'Full Stack Developer'],
          ['Company', 'Amiculum'],
          ['Experience', '4+ years', true],
          ['Core stack', 'Umbraco · C# · .Net'],
          ['Degree', 'BSc Computing, 2:1'],
          ['Certifications', 'Umbraco, Veeva'],
          ['Location', 'United Kingdom'],
        ].map(([label, value, isRed]) => (
          <div key={label as string} className="flex justify-between text-sm border-b border-[var(--border)] pb-3 last:border-0 last:pb-0">
            <span className="text-[var(--text-3)]">{label}</span>
            <span className={isRed ? 'text-[var(--red)] font-medium' : 'font-medium'}>{value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
