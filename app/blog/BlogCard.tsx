import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Article } from "@/query/article.query";
import { formatDistance } from "date-fns";
import { Clock } from "lucide-react";
import Image from "next/image";

export const BlogCard = ({ article }: { article: Article }) => {
  const publishedAt = article.publishedAt ?? article.createdTime;

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="relative rounded-t-lg w-full h-48 overflow-hidden">
        <Image
          src={article.imageCover}
          alt={article.title}
          className="w-full h-full object-cover"
          width={500}
          height={500}
        />
      </div>
      <div className="p-6 pt-2">
        <div className="flex items-center mt-4 space-x-2">
          <Avatar className="w-8 h-8">
            <AvatarImage
              src={`/authors/${
                article.author?.toLowerCase() ?? "default"
              }.webp`}
              alt={article.author ?? "Auteur par défaut"}
            />
          </Avatar>
          <div className="overflow-hidden">
            <p className="text-sm font-medium">{article.author}</p>
            <div className="text-sm text-gray-500 flex items-center space-x-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    {publishedAt.toLocaleDateString("fr-FR")}
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>
                      {formatDistance(publishedAt, new Date(), {
                        addSuffix: true,
                      })}
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <span>•</span>
              <span className="flex items-center gap-1">
                {article.readtime}
                <Clock className="w-3 h-3" />
              </span>
            </div>
          </div>
        </div>
        <h2 className="mt-4 text-xl font-semibold">{article.title}</h2>
        <p
          className="mt-2 text-gray-600 h-32 line-clamp-4"
          title={article.teaser}
        >
          {article.teaser}
        </p>
        <div className="flex items-center mt-4 space-x-2">
          {article.tags.multi_select.map((tag) => (
            <Badge
              key={tag.id}
              className="bg-blue-100 text-blue-600 hover:bg-blue-100"
            >
              {tag.name}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};
