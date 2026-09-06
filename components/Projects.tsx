import { getAllProjects } from "@/lib/projects";

const posts = getAllProjects();

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-20 max-w-6xl mx-auto">
      <div className="reveal text-sm uppercase tracking-wide text-[var(--text-3)] mb-6">Projects</div>
      <div className="reveal grid sm:grid-cols-3 gap-6">
        {posts.map((p) => (
          <div key={p.num} className="bg-[var(--bg-card)] border border-[var(--border)] rounded-[var(--radius)] p-6">
            <div className="text-xs text-[var(--red)] font-semibold mb-2">{p.num}</div>
            <div className="font-semibold text-lg mb-1">{p.title}</div>
            <div className="text-sm text-[var(--text-3)] mb-3">{p.company}</div>
            <p className="text-[var(--text-2)] text-sm">{p.summary}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
