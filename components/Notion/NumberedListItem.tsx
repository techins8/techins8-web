import {
  NumberedListItemBlockObjectResponse,
  TextRichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { Text } from "./Text";

export const NumberedListItem = ({
  numberedListItem,
}: {
  numberedListItem: NumberedListItemBlockObjectResponse;
}) => {
  return (
    <li>
      {numberedListItem.numbered_list_item.rich_text.map((text) => (
        <Text key={text.plain_text} text={text as TextRichTextItemResponse} />
      ))}
    </li>
  );
};
