# Lost in Translation
A personal blog about localisation and development.


I have worked in software localisation for a good few years now and have recently finished the Enspiral Dev Academy's Web development bootcamp and enjoy all language related things as well as trying out new bits of code. This blog is about interesting things that I come across and got to play with.


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
