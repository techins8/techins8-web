import { Block } from "@/components/Notion/Block";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { getArticle } from "@/query/article.query";
import { formatDistance } from "date-fns";
import { fr } from "date-fns/locale";
import { Clock } from "lucide-react";

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
      <div className="container mx-auto px-4 pb-4 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-center py-4">{article.title}</h1>
        <div
          className="w-full h-48 bg-cover bg-center shadow-sm rounded-lg"
          style={{ backgroundImage: `url(${article.imageCover})` }}
        ></div>
        <div className="flex items-center mt-4 gap-4 text-sm text-gray-500">
          <time dateTime={publishedAt.toISOString()}>
            {formatDistance(publishedAt, new Date(), {
              addSuffix: true,
              locale: fr,
            })}
          </time>
          <span>•</span>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <Clock className="w-4 h-4" />
            {article.readtime} min
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-4 flex flex-col items-center">
        <div className="prose max-w-none">
          {article.blocks.map((block) => (
            <Block key={block.id} block={block} />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 pb-4 flex flex-col items-center text-sm text-gray-500 gap-4">
        <span>Written by {article.author ?? "TechIns8"}</span>
        <Avatar className="w-8 h-8">
          <AvatarImage
            src={`/authors/${article.author?.toLowerCase() ?? "default"}.jpeg`}
            alt={article.author ?? "Auteur par défaut"}
          />
        </Avatar>
      </div>
    </>
  );
}
