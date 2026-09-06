import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/project');

export interface ProjectMeta {
  slug: string;
  num: string;
  title: string;
  company: string;
  summary: string;
  tags: string[];
}

export interface Project extends ProjectMeta {
  content: string;
}

export function getAllProjects(): ProjectMeta[] {
  const filenames = fs.readdirSync(postsDirectory).filter((f) => f.endsWith('.md'));

  const posts = filenames.map((filename) => {
    const slug = filename.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug,
        num: data.num,
      title: data.title,
      company: data.company,
      summary: data.summary,
      tags: data.tags || [],
    };
  });

  return posts;
}

export function getProjectBySlug(slug: string): Project {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    num: data.num,
    title: data.title,
    company: data.company,
    summary: data.summary,
    tags: data.tags || [],
    content,
  };
}

export function getAllSlugs(): string[] {
  const filenames = fs.readdirSync(postsDirectory).filter((f) => f.endsWith('.md'));
  return filenames.map((filename) => filename.replace(/\.md$/, ''));
}
