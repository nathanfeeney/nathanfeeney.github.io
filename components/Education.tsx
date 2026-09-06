export default function Education() {
  return (
    <section id="education" className="px-6 py-20 max-w-6xl mx-auto">
      <div className="reveal text-sm uppercase tracking-wide text-[var(--text-3)] mb-6">Education</div>
      <div className="reveal grid md:grid-cols-[200px_1fr] gap-4">
        <div className="text-sm text-[var(--text-3)]">2018 — 2021</div>
        <div>
          <div className="font-semibold">BSc (Hons) Computing Science</div>
          <div className="text-[var(--text-2)]">University of the West of Scotland</div>
          <div className="text-sm text-[var(--red)] mb-2">2:1 Classification</div>
          <p className="text-[var(--text-2)]">
            Modules including Advanced Programming, Database Administration, and Algorithms &
            Collections. Strong teamwork element throughout, developing both technical
            foundations and communication and leadership skills.
          </p>
        </div>
      </div>
    </section>
  );
}
