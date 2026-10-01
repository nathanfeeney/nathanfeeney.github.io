import { getAllPosts } from "@/lib/posts";

const posts = getAllPosts();

export default function Blogs() {
  return (
    <section id="blogs" className="px-6 py-10 max-w-6xl mx-auto">
      <div className="reveal text-sm uppercase tracking-wide text-[var(--text-3)] mb-6">Blog posts</div>
      <div className="reveal grid sm:grid-cols-3 gap-6">
        {posts.map((p) => (
          <div key={p.slug} className="bg-[var(--bg-card)] border border-[var(--border)] rounded-[var(--radius)] p-6">
            <div className="text-xs text-[var(--red)] font-semibold mb-2">{p.slug}</div>
            <div className="font-semibold text-lg mb-1">{p.title}</div>
            <div className="text-sm text-[var(--text-3)] mb-3">{p.date}</div>
            <p className="text-[var(--text-2)] text-sm">{p.summary}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
