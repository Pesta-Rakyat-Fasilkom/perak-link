const { createServer } = require("http")
const { parse } = require("url")
const next = require("next")

const dev = process.env.NODE_ENV !== "production"
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer((req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true)
    const { pathname, query } = parsedUrl

    if (
      pathname === "/" ||
      pathname.startsWith("/api") ||
      pathname.includes("_next") ||
      pathname.includes("fonts") ||
      pathname.includes("assets") ||
      pathname === "/favicon.ico" ||
      pathname === "vercel.svg"
    ) {
      handle(req, res, parsedUrl)
    } else {
      const parsedUrl = parse(`/api${pathname}`, true)
      handle(req, res, parsedUrl)
    }
  }).listen(process.env.PORT || 3000, (err) => {
    if (err) throw err
    console.log("> Ready on http://localhost:3000")
  })
})
