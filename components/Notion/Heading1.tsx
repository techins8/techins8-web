import {
  Heading1BlockObjectResponse,
  TextRichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { Text } from "./Text";
export const Heading1 = ({
  heading,
}: {
  heading: Heading1BlockObjectResponse;
}) => {
  return (
    <h1 className="text-2xl font-bold">
      {heading.heading_1.rich_text.map((text) => (
        <Text key={text.plain_text} text={text as TextRichTextItemResponse} />
      ))}
    </h1>
  );
};
