const SKILL_GROUPS = [
  {
    title: 'Languages',
    items: ['C#', 'JavaScript', 'HTML & CSS / SASS', 'SQL', 'PHP', 'Java', 'PowerShell', 'Visual Basic'],
  },
  {
    title: 'Frameworks',
    items: ['Vue.js', 'NextJS', 'ASP.NET Core', '.NET Core', 'jQuery'],
  },
  {
    title: 'Platforms & CMS',
    items: ['Umbraco 10–13+', 'SharePoint', 'Power Apps', 'Power Automate', 'Intuiface'],
  },
  {
    title: 'Tooling & DevOps',
    items: ['Azure DevOps', 'Git', 'SQL Server', 'RESTful APIs', 'TIA Portal'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-20 max-w-6xl mx-auto">
      <div className="reveal text-sm uppercase tracking-wide text-[var(--text-3)] mb-6">Technical Skills</div>
      <div className="reveal grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {SKILL_GROUPS.map((group) => (
          <div key={group.title} className="bg-[var(--bg-card)] border border-[var(--border)] rounded-[var(--radius)] p-5">
            <div className="font-semibold mb-3">{group.title}</div>
            <div className="flex flex-col gap-2 text-sm text-[var(--text-2)]">
              {group.items.map((item) => (
                <div key={item}>{item}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
