# Eleventy(11ty) Tamil Kavithai

![build-test](https://github.com/mskian/eleventy-tamil-kavithai/workflows/build-test/badge.svg)  

படித்ததில் பிடித்தது - Collect the Favourite Tamil kavithai and Tamil Quotes From Tamil Writers Social Profile - Build using Eleventy and Markdown.  

Eleventy Theme - <https://github.com/ar363/eleventy-stylus-blog-theme>  I made some Changes and Modification.  

> it's For My Personal Usage to Collect My Favourite Tamil Kavithai, Tamil Quotes and Status.  

## Features

- 11ty
- 100% Lighthouse scores
- Speed Optimized
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
- Custom Clipboard Plugin - built using `clipboard.js`
- Add post via shortcode - <https://www.11ty.dev/docs/plugins/image/#use-this-in-your-templates>
- Custom Image downloader Shortcode Plugin
- Custom Manual Copy Text Button Shortcode Plugin  

## Development

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
- Copy kavithai Button - Add this on `copykavithai: true` or `copykavithai: false` Markdown Post File - `true - Enable Copy Button` - `false - Disable Copy Button`
- Add image via Shortcode - put your post images on `images` folder add image shortcode on post (it will automatically optimze images in different sizes - refer `.eleventy.js` file) - images are serve via webp format

```sh
{% image "example-image.png", "Example Alt Text" %}
```

- image downloader Shortcode - image must be in `images` folder it will fetch the optimized image to the users - just add the image file name

```sh
{% download "example-image" %}
```

- Manual Copy Text Button Shortcode - add `copytext: true` in Markdown Post file

```md
<div id="getkavithai">
Example Post content <br>
Just add this format on your Markdown File.
</div>

{% copytext "📋 Copy Above Text" %}
```

### Note

Before using this theme Replace/edit Everything which I added because it was the source code of my production site and a few plugins are written for personal usage if you want to use it check `plugins` folder and Markdown Files about the plugin usage

## Reference

- 11ty Development - <https://jec.fyi/blog>
- Guides - <https://11ty.rocks/>

## LICENSE ☑

MIT
