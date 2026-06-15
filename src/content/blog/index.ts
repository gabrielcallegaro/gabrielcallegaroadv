export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO yyyy-mm-dd
  author?: string;
  /** HTML content (parágrafos, subtítulos, listas). */
  content: string;
}

// Para adicionar um novo artigo: crie src/content/blog/<slug>.ts
// exportando `default` um objeto BlogPost, e importe-o abaixo.
import direitosRescisao from "./direitos-na-rescisao.ts";
import rescisaoIndireta from "./rescisao-indireta.ts";

export const posts: BlogPost[] = [direitosRescisao, rescisaoIndireta].sort((a, b) =>
  b.date.localeCompare(a.date),
);

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}