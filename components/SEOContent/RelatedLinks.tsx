import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface RelatedLink {
  title: string;
  description: string;
  url: string;
}

interface RelatedLinksProps {
  links: RelatedLink[];
  title?: string;
}

export function RelatedLinks({ links, title = "Pages connexes" }: RelatedLinksProps) {
  if (links.length === 0) return null;

  return (
    <section className="w-full py-12 px-4 bg-popover">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-title mb-6">{title}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {links.map((link) => (
            <Link
              key={link.url}
              href={link.url}
              className="group p-6 bg-background rounded-lg border border-border hover:border-primary transition-all hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold text-title mb-2 group-hover:text-primary transition-colors">
                {link.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-3">{link.description}</p>
              <div className="flex items-center text-primary text-sm font-medium">
                Voir les offres
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
