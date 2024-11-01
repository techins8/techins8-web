import {
  Heading3BlockObjectResponse,
  TextRichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { Text } from "./Text";

export const Heading3 = ({
  heading,
}: {
  heading: Heading3BlockObjectResponse;
}) => {
  return (
    <h3 className="text-lg font-bold">
      {heading.heading_3.rich_text.map((text) => (
        <Text key={text.plain_text} text={text as TextRichTextItemResponse} />
      ))}
    </h3>
  );
};
