import path from 'path';
import { promises as fs } from 'fs';

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
  const data = await fs.readFile(filepath, 'utf-8');

  return JSON.parse(data);
}

// export async function getProduct(id: string): Promise<Product | undefined> {
//   const products = await getProducts();

//   return products.find((item) => item.id === id);
// }
