import { getAllProjects } from "@/lib/projects";

const PROJECTSold = [
  {
    num: 'Project 01',
    title: 'Call Log Application',
    context: 'Kigtek · Professional',
    desc: 'Replaced an outdated call logging system with a Power Apps solution using Power Automate and SharePoint. Improved UX by removing redundant steps, added searchable resolution history, and fully automated monthly client reports.',
  },
  {
    num: 'Project 02',
    title: 'QR Hospitality Platform',
    context: 'University · Honours Dissertation',
    desc: 'Web application allowing restaurants to serve menus, deals, and events via QR codes. Built in PHP with SQL for user accounts and content management — exploring how QR technology could genuinely improve the hospitality sector.',
  },
  {
    num: 'Project 03',
    title: 'Tank War — Android Game',
    context: 'University · Advanced Programming',
    desc: 'Ported a C++ Tank War game to Java using Android Studio. Rebuilt core game logic from scratch, improved on the original gameplay, and gained hands-on experience adapting an existing codebase to a new platform.',
  },
  {
    num: 'Project 04',
    title: "I'm Lost — Dungeon Crawler",
    context: 'University · Group Project · Team Lead',
    desc: 'Led a team building a browser-based dungeon crawler in Java, HTML, CSS, and JavaScript. Managed task delegation, quality, and built the front-end. Presented the finished game to the year group with a full technical walkthrough.',
  },
];

const posts = getAllProjects();


export default function Projects() {
  return (
    <section id="projects" className="px-6 py-20 max-w-6xl mx-auto">
      <div className="reveal text-sm uppercase tracking-wide text-[var(--text-3)] mb-6">Projects</div>
      <div className="reveal grid sm:grid-cols-4 gap-6">
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
