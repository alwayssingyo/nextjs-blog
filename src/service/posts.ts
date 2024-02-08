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

export type PostData = Posts & { content: string };

export async function getFeaturedPost(): Promise<Posts[]> {
  return getPosts() //
    .then((posts) => posts.filter((post) => post.featured));
}

export async function getNonFeaturedPost(): Promise<Posts[]> {
  return getPosts() //
    .then((posts) => posts.filter((post) => !post.featured));
}

export async function getPosts(): Promise<Posts[]> {
  const filepath = path.join(process.cwd(), 'data', 'posts.json');
  return fs.promises
    .readFile(filepath, 'utf-8')
    .then<Posts[]>(JSON.parse)
    .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
}

export async function getPostData(id: string): Promise<PostData> {
  const filepath = path.join(process.cwd(), 'data/posts', `${id}.md`);
  const metadata = await getPosts() //
    .then((posts) => posts.find((post) => post.path === id));
  if (!metadata) throw new Error(`${id}에 해당하는 포스트를 찾을 수 없음`);

  const content = await fs.promises.readFile(filepath, 'utf-8');
  return { ...metadata, content };
}
