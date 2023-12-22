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

export async function getPosts(): Promise<Posts[]> {
  const filepath = path.join(process.cwd(), 'data', 'posts.json');
  const data = await fs.promises.readFile(filepath, 'utf-8');

  return JSON.parse(data);
}

export async function getPostData(id: string): Promise<string> {
  const filepath = path.join(process.cwd(), 'data/posts', `${id}.md`);
  const fileContents = fs.promises.readFile(filepath, 'utf-8');

  return fileContents;
}

// export async function getProduct(id: string): Promise<Product | undefined> {
//   const products = await getProducts();

//   return products.find((item) => item.id === id);
// }
