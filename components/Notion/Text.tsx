import { cn } from "@/lib/utils";
import { TextRichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

export const Text = ({ text }: { text: TextRichTextItemResponse }) => {
  const color = text.annotations.color;
  const isCode = text.annotations.code;
  const classes = cn({
    "font-mono": isCode,
    "text-red-500": isCode,
    "text-sm": isCode,
    "bg-gray-200": isCode,
    italic: text.annotations.italic,
    underline: text.annotations.underline,
    strikethrough: text.annotations.strikethrough,
    "font-bold": text.annotations.bold,
    [`text-[${color}]`]: color !== "default",
  });

  if (text.href) {
    return (
      <a href={text.href} className={classes}>
        {text.text.content}
      </a>
    );
  }

  return <span className={classes}>{text.text.content}</span>;
};
