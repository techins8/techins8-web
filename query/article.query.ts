import { notion } from "@/lib/notion";
import type {
  BlockObjectResponse,
  DatabaseObjectResponse,
  DatePropertyItemObjectResponse,
  MultiSelectPropertyItemObjectResponse,
  NumberPropertyItemObjectResponse,
  SelectPropertyItemObjectResponse,
  TextRichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints";

export type Article = {
  id: string;
  title: string;
  tags: MultiSelectPropertyItemObjectResponse;
  teaser: string;
  publishedAt?: Date | null;
  imageCover: string;
  author?: string;
  readtime?: number;
  createdTime: Date;
};

export type ArticleBlocks = Article & {
  blocks: BlockObjectResponse[];
};

type NotionArticle = DatabaseObjectResponse & {
  properties: {
    lang: SelectPropertyItemObjectResponse;
    Name: {
      title?: TextRichTextItemResponse[];
    };
    tags: MultiSelectPropertyItemObjectResponse;
    teaser: { rich_text: TextRichTextItemResponse[] };
    publishedAt: DatePropertyItemObjectResponse;
    author: SelectPropertyItemObjectResponse;
    readtime: NumberPropertyItemObjectResponse;
  };
  cover: {
    type: "external" | "file";
    external?: {
      url: string;
    };
    file?: {
      url: string;
    };
  };
};

export const getArticles = async (): Promise<Article[]> => {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_BLOG_DATABASE_ID as string,
    sorts: [
      {
        timestamp: "created_time",
        direction: "descending",
      },
    ],
    filter: {
      property: "status",
      status: {
        equals: "Done",
      },
    },
  });

  return response.results.map((result) => makeArticle(result as NotionArticle));
};

const makeArticle = (notionArticle: NotionArticle): Article => {
  const cover =
    notionArticle.cover.type === "external"
      ? notionArticle.cover.external?.url
      : notionArticle.cover.file?.url;

  const startDate: string | undefined =
    notionArticle.properties.publishedAt.date?.start;

  const teaser = notionArticle.properties?.teaser.rich_text
    .map((teaser) => teaser.plain_text)
    .join(" ");

  return {
    id: notionArticle.id,
    tags: notionArticle.properties.tags,
    teaser: teaser,
    title: notionArticle.properties.Name.title?.[0]?.plain_text as string,
    publishedAt: startDate ? (new Date(startDate as string) as Date) : null,
    imageCover: cover as string,
    author: notionArticle.properties.author?.select?.name as string,
    readtime: notionArticle.properties.readtime.number as number,
    createdTime: new Date(notionArticle.created_time),
  };
};

export const getArticle = async (id: string): Promise<ArticleBlocks> => {
  const response = await notion.pages.retrieve({
    page_id: id,
  });

  const blocks = await notion.blocks.children.list({
    block_id: id,
  });

  const notionArticle = response as unknown as NotionArticle;

  return {
    ...makeArticle(notionArticle),
    blocks: blocks.results as BlockObjectResponse[],
  };
};
