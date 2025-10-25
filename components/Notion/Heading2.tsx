import type { Heading2BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { Text } from "./Text";

interface Heading2Props {
  heading: Heading2BlockObjectResponse;
}

export function Heading2({ heading }: Heading2Props) {
  const richText = heading.heading_2.rich_text[0];

  if (!richText || richText.type !== "text") {
    return null; // or return a fallback UI
  }

  return (
    <h2 className="text-2xl font-semibold mb-6 mt-8">
      <Text text={richText} />
    </h2>
  );
}
