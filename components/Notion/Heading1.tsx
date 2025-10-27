import type {
  Heading1BlockObjectResponse,
  TextRichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { Text } from "./Text";

interface Heading1Props {
  heading: Heading1BlockObjectResponse;
}

export function Heading1({ heading }: Heading1Props) {
  const richText = heading.heading_1.rich_text[0];

  return (
    <h1 className="text-4xl font-bold mb-6 mt-8">
      {richText.type === "text" && <Text text={richText as TextRichTextItemResponse} />}
      {richText.type === "mention" && richText.plain_text}
      {richText.type === "equation" && richText.plain_text}
    </h1>
  );
}
