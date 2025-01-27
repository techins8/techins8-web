import { Heading3BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { Text } from "./Text";

interface Heading3Props {
  heading: Heading3BlockObjectResponse;
}

export function Heading3({ heading }: Heading3Props) {
  const richText = heading.heading_3.rich_text[0];

  return (
    <h3 className="text-xl font-semibold mb-4 mt-6">
      {richText.type === "text" && <Text text={richText} />}
      {richText.type === "mention" && richText.plain_text}
      {richText.type === "equation" && richText.plain_text}
    </h3>
  );
}
