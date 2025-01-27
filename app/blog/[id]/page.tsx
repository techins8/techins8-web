import { Block } from "@/components/Notion/Block";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { getArticle } from "@/query/article.query";
import { formatDistance } from "date-fns";
import { fr } from "date-fns/locale";
import { Clock } from "lucide-react";
import { ActionBar } from "../ActionBar";
import { Metadata } from "next";

// Générer les métadonnées dynamiquement pour chaque article
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const article = await getArticle(params.id);
  
  return {
    title: article.title,
    description: article.teaser || "Article sur TechIns8",
    openGraph: {
      title: article.title,
      description: article.teaser || "Article sur TechIns8",
      type: "article",
      url: `https://techins8.com/blog/${params.id}`,
      images: [
        {
          url: article.imageCover || "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.teaser || "Article sur TechIns8",
      images: [article.imageCover || "/og-image.jpg"],
    },
  };
}

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const article = await getArticle(id);
  const publishedAt = article.publishedAt ?? article.createdTime;

  return (
    <>
      <article className="max-w-[800px] mx-auto px-8 py-8 font-sans">
        {/* Cover image */}
        {article.imageCover && (
          <div className="mb-6">
            <div
              className="w-full h-64 bg-cover bg-center rounded-lg shadow-sm"
              style={{ backgroundImage: `url(${article.imageCover})` }}
            />
          </div>
        )}

        {/* Author and metadata section */}
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
            <span className="text-gray-900">
              {article.author ?? "TechIns8"}
            </span>
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

        {/* Action bar */}
        <ActionBar />

        {/* Article content */}
        <div
          className="[&>p]:text-lg [&>p]:leading-[1.8] [&>p]:mb-4
                      [&>ul]:ml-6 [&>ul]:mb-3 [&>ul]:space-y-3
                      [&>ol]:ml-6 [&>ol]:mb-3 [&>ol]:space-y-3
                      [&>img]:rounded-lg [&>img]:my-6 [&>img]:w-full
                      [&>a]:text-[#0073e6] [&>a]:no-underline hover:[&>a]:underline"
        >
          {article.blocks.map((block) => (
            <Block key={block.id} block={block} />
          ))}
        </div>
      </article>
    </>
  );
}
