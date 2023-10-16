import makeClient from '$lib/functionality/prismic/client';
import Prismic from "@prismicio/client"

export const GET = (async ({ url }) => {
  const api = await makeClient()

  const works = await api.query([
    Prismic.Predicates.at('document.type', 'work', { pageSize: 99 })
  ])

  const { origin } = url

  return new Response(
    `
    <?xml version="1.0" encoding="UTF-8" ?>
    <urlset
      xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xhtml="https://www.w3.org/1999/xhtml"
      xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
      xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
      xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
      xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
    >

    <url>
    <loc>${origin}</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
    </url>

    <url>
    <loc>${origin}/about</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
    </url>

    ${works.results.map(w => {
      return `
        <url>
          <loc>${origin}/works/${w.uid}</loc>
          <changefreq>daily</changefreq>
          <priority>0.7</priority>
        </url>
      `
    }).join('')}

    </urlset>`.trim(),
    {
      headers: {
        'Content-Type': 'application/xml'
      }
    }
  );
})