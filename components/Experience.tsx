const JOBS = [
  {
    period: 'Oct 2025 — Present',
    co: 'Amiculum',
    role: 'Full Stack Developer',
    desc: 'Technical ownership of a key client account, delivering high-quality solutions on Umbraco and modern web technologies. Working closely with internal teams to produce digital content and interactive media for scientific conferences.',
    pills: ['Umbraco 13+', 'C#', 'Vue.js', 'NextJS', 'Intuiface', 'SharePoint'],
  },
  {
    period: 'Oct 2024 — Oct 2025',
    co: 'Click2Convert',
    role: 'Full Stack Developer',
    desc: 'Upgraded client websites from Umbraco 8 to Umbraco 13 with minimal downtime. Led the go-live process for Cromlix and Rockliffe Hall, and assisted content migration for Crerar Hotels. Provided bug fixes under ongoing maintenance retainers.',
    pills: ['Umbraco 13', 'C#', 'Vue.js', 'Azure DevOps'],
  },
  {
    period: 'Mar 2023 — Oct 2024',
    co: 'Tactuum Ltd',
    role: 'Software Developer',
    desc: 'Contributed to Quris Clinical Companion, a decision support system used by over 44,000 NHS clinicians on Umbraco 10. Responsibilities included bug fixing, product enhancements, client communication, code reviews, and live releases. Achieved Umbraco Certified Expert and led migrations from Umbraco 7 to a unified Umbraco 10 instance.',
    pills: ['C#', '.NET Core', 'Umbraco 10', 'Vue.js', 'Azure DevOps', 'SQL'],
  },
  {
    period: 'Oct 2021 — Mar 2023',
    co: 'Kigtek',
    role: 'Graduate Software Engineer',
    desc: 'Maintained and upgraded CaskTEK, a cask monitoring application. Built a maintenance logging app in Power Apps and Power Automate, automating monthly client reports that had previously been generated manually and improving on-call staff efficiency.',
    pills: ['SQL', 'VB.NET', 'RESTful APIs', 'TIA Portal', 'Power Apps', 'Power Automate'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-20 max-w-6xl mx-auto">
      <div className="reveal text-sm uppercase tracking-wide text-[var(--text-3)] mb-6">Work Experience</div>
      <div className="flex flex-col gap-10">
        {JOBS.map((job) => (
          <div key={job.co + job.period} className="reveal grid md:grid-cols-[200px_1fr] gap-4 border-b border-[var(--border)] pb-8 last:border-0">
            <div>
              <div className="text-sm text-[var(--text-3)]">{job.period}</div>
              <div className="font-semibold">{job.co}</div>
            </div>
            <div>
              <div className="font-medium mb-2">{job.role}</div>
              <p className="text-[var(--text-2)] mb-3">{job.desc}</p>
              <div className="flex flex-wrap gap-2">
                {job.pills.map((pill) => (
                  <span key={pill} className="text-xs px-3 py-1 rounded-full bg-[var(--red-bg,rgba(200,40,28,0.07))] border border-[var(--red-bd,rgba(200,40,28,0.2))] text-[var(--red)]">
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
