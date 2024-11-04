// Exportation des noms des routes
export const ROOT_NAMES = {
  PUBLIC_ROUTES: {
    HOME: "/",
    BLOG: "/blog",
    JOB_OFFERS: "/job_offers",
    LEGAL: "/legal",
    PARTNERSHIPS: "/partnerships",
  },
  PRIVATE_ROUTES: {
    DASHBOARD: "/",
  },
};

export const PRIVATE_ROUTES = Object.values(ROOT_NAMES.PRIVATE_ROUTES);
