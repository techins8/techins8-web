import Image from "next/image";

export const SourceIcon = ({ source }: { source?: string }) => {
  if (!source) return null;

  if (source.toLowerCase() === "freework")
    return (
      <Image src="/images/icons/fw.ico" alt="Freework" width={16} height={16} loading="lazy" />
    );

  if (source.toLowerCase() === "welcometothejungle")
    return (
      <Image
        src="/images/icons/wttj.ico"
        alt="Welcome to the jungle"
        width={16}
        height={16}
        loading="lazy"
      />
    );

  return null;
};
