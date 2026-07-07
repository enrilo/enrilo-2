// Central SEO configuration.
// IMPORTANT: Update SITE_URL to your real production domain before deploying.
// Everything else (metadataBase, canonical URLs, sitemap, robots, OG tags)
// is derived from this file, so this is the only place you need to edit.

export const SITE_URL = "https://acadtracker.com"; // <-- change to your real domain
export const SITE_NAME = "AcadTracker";
export const DEFAULT_TITLE =
  "AcadTracker - Consultancy Management Software for Education Consultants";
export const DEFAULT_DESCRIPTION =
  "AcadTracker is an all-in-one consultancy management platform for educational consultancies. Manage students, track visa applications, monitor documents, and streamline follow-ups in one place.";

// Primary keyword targets. These aren't a ranking factor on their own,
// but they document the terms every page's title/description/H1s should
// reflect, and are used to seed the `keywords` meta field.
export const SITE_KEYWORDS = [
  "consultancy management software",
  "education consultancy software",
  "student management system",
  "visa application tracking software",
  "study abroad consultancy CRM",
  "student visa management platform",
  "education agent software",
  "overseas education consultancy tool",
];

export const TWITTER_HANDLE = "@acadtracker"; // update or remove if you don't have one

export const OG_IMAGE = {
  url: `${SITE_URL}/opengraph-image.png`,
  width: 1920,
  height: 1080,
  alt: `${SITE_NAME} - Consultancy Management Platform`,
};
