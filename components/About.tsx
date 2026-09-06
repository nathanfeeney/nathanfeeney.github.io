export default function About() {
  return (
    <section id="about" className="px-6 py-20 max-w-6xl mx-auto">
      <div className="reveal text-sm uppercase tracking-wide text-[var(--text-3)] mb-6">About Me</div>
      <div className="reveal grid md:grid-cols-2 gap-10">
        <div className="space-y-4 text-[var(--text-2)]">
          <p>
            I'm a <strong className="text-[var(--text)]">full-stack developer</strong> with a
            focus on Umbraco CMS, C#, and modern JavaScript frameworks. I enjoy writing clean,
            maintainable code and taking real ownership of the products I work on.
          </p>
          <p>
            My background spans digital agencies, healthcare software, and industrial tech
            which means I've shipped products in very different environments, from
            fast-moving agency timelines to regulated clinical platforms used by tens of
            thousands of NHS clinicians.
          </p>
          <p>
            I'm at my best when I have <strong className="text-[var(--text)]">end-to-end
            responsibility</strong>, working closely with clients and colleagues to deliver
            something that genuinely works well.
          </p>
        </div>

        <div className="space-y-4">
          {[
            ['Current Role', 'Developer · Amiculum'],
            ['Location', 'United Kingdom'],
            ['Education', 'BSc (Hons) Computing Science, 2:1, University of the West of Scotland'],
            ['Certifications', 'Umbraco Certified Expert, Veeva Certified'],
            ['Core Stack', 'Umbraco · C# · Vue.js · NextJS · Azure DevOps'],
          ].map(([label, value]) => (
            <div key={label} className="border-b border-[var(--border)] pb-3">
              <div className="text-xs uppercase tracking-wide text-[var(--text-3)] mb-1">{label}</div>
              <div>{value}</div>
            </div>
          ))}
          <div className="border-b border-[var(--border)] pb-3">
            <div className="text-xs uppercase tracking-wide text-[var(--text-3)] mb-1">Contact</div>
            <a href="mailto:TNFeeney@hotmail.com" className="text-[var(--red)]">
              TNFeeney@hotmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
