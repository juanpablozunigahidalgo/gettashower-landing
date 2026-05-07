import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.gettashower.com";
  const lastModified = new Date();

  return [
    { url: base, lastModified },
    { url: `${base}/getapp`, lastModified },
    { url: `${base}/host`, lastModified },
    { url: `${base}/privacy-policy`, lastModified },
    { url: `${base}/privacy-policy/account-deletion`, lastModified },
    { url: `${base}/terms-of-service-eu`, lastModified },
  ];
}
