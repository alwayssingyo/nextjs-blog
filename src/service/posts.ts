import path from 'path';
import fs from 'fs';

export type Posts = {
  title: string;
  description: string;
  date: string;
  category: string;
  path: string;
  featured: boolean;
};

export async function getFeaturedPost(): Promise<Posts[]> {
  return getPosts() //
    .then((posts) => posts.filter((post) => post.featured));
}

export async function getPosts(): Promise<Posts[]> {
  const filepath = path.join(process.cwd(), 'data', 'posts.json');
  return fs.promises
    .readFile(filepath, 'utf-8')
    .then<Posts[]>(JSON.parse)
    .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
}

export async function getPostData(id: string): Promise<string> {
  const filepath = path.join(process.cwd(), 'data/posts', `${id}.md`);
  const fileContents = fs.promises.readFile(filepath, 'utf-8');
  return fileContents;
}
