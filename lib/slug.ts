export const toSlug = (str: string): string =>
  str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

export const jobSlug = (job: { slug?: string; title?: string; id: number }): string => {
  const base = job.slug ?? toSlug(job.title ?? "offre");
  return `${base}-${job.id}`;
};

export const idFromJobSlug = (slug: string): string => {
  const parts = slug.split("-");
  return parts.at(-1) ?? slug;
};
