import {
  Heading2BlockObjectResponse,
  TextRichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { Text } from "./Text";

export const Heading2 = ({
  heading,
}: {
  heading: Heading2BlockObjectResponse;
}) => {
  return (
    <h2 className="text-xl font-bold">
      {heading.heading_2.rich_text.map((text) => (
        <Text key={text.plain_text} text={text as TextRichTextItemResponse} />
      ))}
    </h2>
  );
};
