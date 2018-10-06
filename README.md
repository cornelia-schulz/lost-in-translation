# Lost in Translation
A blog about localisation tips and tricks


I have worked in software localisation for a good few years now and often I find myself googling and collecting information and how to’s on various topics related to localisation and I thought, rather than keeping it all hidden in my little notebook, I will summarise things I research and collate them in this blog.


Find this blog at https://www.cornelia-schulz.net


Subscribe via RSS https://www.cornelia-schulz.net/rss.xml



## Notes on technical bits
### Caching of static content with Gatsby and Netlify
npm install gatsby-plugin-netlify

Update gatsby.config.js file with:
```
plugins: [
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          "/static/*": [`Cache-Control: public, max-age=31536000, immutable`],
        }, // option to add more headers. `Link` headers are transformed by the below criteria
        allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
        transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
        generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
      },
    }
   ]
```
Then upload to Netlify.
