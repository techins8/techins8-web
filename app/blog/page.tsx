import Link from "next/link";
import { getArticles } from "@/query/article.query";
import { BlogCard } from "./BlogCard";

export default async function BlogPage() {
  const articles = await getArticles();

  return (
    <div className="max-w-6xl mx-auto px-4 mb-20">
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
