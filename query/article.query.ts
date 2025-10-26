"use server";

import { readFile } from "fs/promises";
import { join } from "path";

export type Article = {
  id: string;
  title: string;
  tags: string[];
  teaser: string;
  publishedAt?: Date | null;
  imageCover: string;
  author?: string;
  readtime?: number;
  createdTime: Date;
};

export type ArticleWithContent = Article & {
  content: string;
};

type ArticleJSON = {
  id: string;
  title: string;
  tags: string[];
  teaser: string;
  publishedAt: string;
  imageCover: string;
  author: string;
  readtime: number;
};

type ArticlesData = {
  articles: ArticleJSON[];
};

const ARTICLES_JSON_PATH = join(process.cwd(), "data", "blog", "articles.json");
const CONTENT_DIR = join(process.cwd(), "data", "blog", "content");

export const getArticles = async (): Promise<Article[]> => {
  const fileContent = await readFile(ARTICLES_JSON_PATH, "utf-8");
  const data: ArticlesData = JSON.parse(fileContent);

  const articles = data.articles.map((article) => ({
    id: article.id,
    title: article.title,
    tags: article.tags,
    teaser: article.teaser,
    publishedAt: article.publishedAt ? new Date(article.publishedAt) : null,
    imageCover: article.imageCover,
    author: article.author,
    readtime: article.readtime,
    createdTime: article.publishedAt
      ? new Date(article.publishedAt)
      : new Date(),
  }));

  articles.sort((a, b) => {
    const dateA = a.publishedAt ?? a.createdTime;
    const dateB = b.publishedAt ?? b.createdTime;
    return dateB.getTime() - dateA.getTime();
  });

  return articles;
};

export const getArticle = async (id: string): Promise<ArticleWithContent> => {
  const articles = await getArticles();
  const article = articles.find((a) => a.id === id);

  if (!article) {
    throw new Error(`Article not found: ${id}`);
  }

  const contentPath = join(CONTENT_DIR, `${id}.md`);
  const content = await readFile(contentPath, "utf-8");

  return {
    ...article,
    content,
  };
};
