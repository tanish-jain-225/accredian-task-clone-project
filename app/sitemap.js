// app/sitemap.js
export default function sitemap() {
  const baseUrl = 'https://enterprise.accredian.com';
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    // Future expansion: Add specific program pages here
  ]
}
