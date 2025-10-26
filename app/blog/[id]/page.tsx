import { formatDistance } from "date-fns";
import { fr } from "date-fns/locale";
import { Clock } from "lucide-react";
import type { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { getArticle, getArticles } from "@/query/article.query";
import { ActionBar } from "../ActionBar";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  const articles = await getArticles();
  return articles.map((article) => ({
    id: article.id,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const article = await getArticle(id);
  const publishedTime = article.publishedAt ?? article.createdTime;

  return {
    title: article.title,
    description: article.teaser || "Article sur FreeMatch",
    authors: [{ name: article.author }],
    publisher: "FreeMatch",
    openGraph: {
      title: article.title,
      description: article.teaser || "Article sur FreeMatch",
      type: "article",
      url: `https://freemat.ch/blog/${id}`,
      images: [
        {
          url: article.imageCover || "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
      publishedTime: publishedTime.toISOString(),
      authors: article.author,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.teaser || "Article sur FreeMatch",
      images: [article.imageCover || "/og-image.jpg"],
    },
    alternates: {
      canonical: `https://freemat.ch/blog/${id}`,
    },
  };
}

export default async function BlogPost({ params }: PageProps) {
  const { id } = await params;
  const article = await getArticle(id);
  const publishedAt = article.publishedAt ?? article.createdTime;

  return (
    <article className="max-w-[800px] mx-auto px-8 py-8 font-sans">
      {article.imageCover && (
        <div className="mb-6">
          <div
            className="w-full h-64 bg-cover bg-center rounded-lg shadow-sm"
            style={{ backgroundImage: `url(${article.imageCover})` }}
          />
        </div>
      )}

      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12">
          <Avatar>
            <AvatarImage
              className="rounded-full object-cover w-full h-full"
              src={`/authors/${article.author?.toLowerCase() ?? "default"}.webp`}
              alt={
                article.author
                  ? `Photo de ${article.author}`
                  : "Auteur par défaut"
              }
            />
          </Avatar>
        </div>
        <div className="flex flex-col">
          <span className="text-gray-900">{article.author ?? "FreeMatch"}</span>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <time dateTime={publishedAt.toISOString()}>
              {formatDistance(publishedAt, new Date(), {
                addSuffix: true,
                locale: fr,
              })}
            </time>
            <span>·</span>
            <div className="flex items-center">
              <Clock className="w-4 h-4" />
              <span className="ml-2">{article.readtime} min read</span>
            </div>
          </div>
        </div>
      </div>

      <ActionBar />

      <div className="prose prose-lg max-w-none mt-8">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {article.content}
        </ReactMarkdown>
      </div>
    </article>
  );
}
