
module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  async rewrites() {
    return [
      {
        "source": "/about/:path*",
        "destination": "https://buried-signals-about.vercel.app/:path*"
      },
      {"source":"/test-article-01/:path*","destination":"https://buriedsignalsmag.github.io/test-article-01/:path*"},
      {"source":"/test-article-02/:path*","destination":"https://buriedsignalsmag.github.io/test-article-02/:path*"}
    ]
  }
}
