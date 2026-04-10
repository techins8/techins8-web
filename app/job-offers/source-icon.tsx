import Image from "next/image";

const SOURCE_ICONS: Record<string, { src: string; alt: string }> = {
  freework: { src: "/images/icons/fw.ico", alt: "Freework" },
  welcometothejungle: { src: "/images/icons/wttj.png", alt: "Welcome to the jungle" },
};

export const SourceIcon = ({ source }: { source?: string }) => {
  if (!source) return null;

  const icon = SOURCE_ICONS[source.toLowerCase()];
  if (!icon) return null;

  return <Image src={icon.src} alt={icon.alt} width={16} height={16} loading="lazy" />;
};
