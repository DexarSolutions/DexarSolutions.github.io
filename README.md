Make index.html the default (home) page

What I added

- `.htaccess` – sets `DirectoryIndex index.html` so Apache will serve `index.html` as the default page.

How to verify locally

- If you're using a simple static server like `python3 -m http.server`, that server will already serve `index.html` at `/` by default.

- For Apache: place this project in your site's document root (or virtual host) and ensure `.htaccess` files are allowed (AllowOverride All). Then visit your site root — `index.html` will be served.

Other hosting environments

- Nginx: add `index index.html index.htm;` to your server block.

- GitHub Pages: `index.html` in the repository root is automatically used as the home page.

- Netlify: `index.html` is used by default. If you need redirects or SPA fallback, add a `_redirects` file.

If you want, I can:

- Add a `301` redirect so any requests to `/contact.html` or `/some-old-page.html` forward to `/`.
- Add a Netlify `_redirects` file or Nginx config snippet tailored to your host.
