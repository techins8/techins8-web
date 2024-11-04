import {
  ParagraphBlockObjectResponse,
  TextRichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { Text } from "./Text";

export const Paragraph = ({
  paragraph,
}: {
  paragraph: ParagraphBlockObjectResponse;
}) => {
  return (
    <p className="mb-3">
      {paragraph.paragraph.rich_text.length === 0 && <br />}
      {paragraph.paragraph.rich_text.map((text) => (
        <Text key={text.plain_text} text={text as TextRichTextItemResponse} />
      ))}
    </p>
  );
};
