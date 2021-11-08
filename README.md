# Eleventy Tamil Kavithai

![build-test](https://github.com/mskian/eleventy-tamil-kavithai/workflows/build-test/badge.svg)  

படித்ததில் பிடித்தது - Collect the Favourite Tamil kavithai and Tamil Quotes From Tamil Writers Social Profile - Build using Eleventy and Markdown.  

Eleventy Theme - <https://github.com/ar363/eleventy-stylus-blog-theme>  I made some Changes and Modification.  

> it's For My Personal Usage to Collect My Favourite Tamil Kavithai, Tamil Quotes and Status.  

## Features

- 100% Lighthouse scores
- Toggleable dark theme (PS. theme preference is also stored in `localStorage`)
- Tags as taxonomy
- Integrated with Eleventy's official [navigation plugin](https://www.11ty.dev/docs/plugins/navigation/)
- Also generates Atom RSS Feed with Eleventy's official [RSS plugin](https://www.11ty.dev/docs/plugins/rss/)
- Sitemap generation
- Robots.txt
- Non-post pages support (eg. About page, Contact page
- Markdown Post content
- PWA Support
- Offline support
- Meta tags
- Schema Markup
- Host it Freely on Netlify, Heroku, Vercel and Github Pages
- Load inner pages instantly - <https://github.com/gijo-varghese/flying-pages>
- Inline Minified CSS - <https://www.11ty.dev/docs/quicktips/inline-css/>
- Inline Minified Javascript - <https://www.11ty.dev/docs/quicktips/inline-js/>

## Developments

- Clone or Download the Repo

```sh
git clone https://github.com/mskian/eleventy-tamil-kavithai.git
cd eleventy-tamil-kavithai
yarn
```

- Test and Modify the Template

```sh
yarn dev
```

- Production build

```sh
yarn build
```

- Create New Post

```sh
yarn newpost
```

- Update site info's at - `_data/site.js`
- Update `manifest.json` and icons on `static` folder
- Post content in `posts` folder
- Create new page in `pages` folder
- Update service worker file in `static` folder `service-worker.js`
- Update Meta details in `/_includes/layouts/base.njk`
- Update Schema Markup details in `/_includes/components`

## LICENSE ☑

MIT
