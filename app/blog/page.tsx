"use client";

import { getArticles } from "@/query/article.query";
import Link from "next/link";
import { BlogCard } from "./BlogCard";
import { useState, useEffect } from "react";
import { Article } from "@/query/article.query";

export default function BlogPage() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    getArticles().then(setArticles);
  }, []);

  return (
    <div className="min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-gray-600">
          Découvrez nos articles pour vous aider à mieux comprendre le marché de
          l&apos;emploi.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <Link href={`/blog/${article.id}`} key={article.id}>
            <BlogCard article={article} />
          </Link>
        ))}
      </div>
    </div>
  );
}
