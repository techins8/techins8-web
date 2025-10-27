import type { ImageBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import ImageLink from "next/image";

export const ImageBlock = ({ image }: { image: ImageBlockObjectResponse }) => {
  const src = "file" in image.image ? image.image.file.url : image.image.external.url;
  return <ImageLink className="mb-3" src={src} alt={src} width={600} height={600} />;
};
