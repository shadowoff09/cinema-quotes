![](src/public/images/banner.png)</br>
[![Licence](https://img.shields.io/github/license/shadowoff09/cinema-quotes)](https://github.com/shadowoff09/cinema-quotes/blob/main/LICENSE)
[![Deployments](https://img.shields.io/github/deployments/shadowoff09/cinema-quotes/Production?logo=vercel)](https://github.com/shadowoff09/cinema-quotes)
[![Commits](https://img.shields.io/github/last-commit/shadowoff09/cinema-quotes)](https://github.com/shadowoff09/cinema-quotes/commits/main)
[![Repo Size](https://img.shields.io/github/repo-size/shadowoff09/cinema-quotes)](https://github.com/shadowoff09/cinema-quotes)
[![Quotes](https://img.shields.io/badge/quotes-78-blue)](https://github.com/shadowoff09/cinema-quotes/blob/main/quotes.js)
[![Paypal](https://img.shields.io/badge/Paypal-Donate-blue)](https://paypal.me/diogogaspar123)
[![Ko-Fi](https://img.shields.io/badge/Ko--Fi-Donate-ff69b4)](https://ko-fi.com/shadowoff09)

# Getting Started 🚀
## Deploying from Docker Hub 🐳

You will need Docker installed on your machine.

```bash
  docker run -d -p 3001:3001 shadowoff09/cinema-quotes:latest
```

Or

```bash
  docker run -d \
  -p 3001:3001 \
  --name cinema-quotes \
  --restart=always \
  shadowoff09/cinema-quotes:latest
```


[![Cinema-Quotes on Docker Hub](https://dockerico.blankenship.io/image/shadowoff09/cinema-quotes)](https://hub.docker.com/r/shadowoff09/cinema-quotes)

## Deploying from GitHub (GHCR) 🐙

```bash
  docker run -p 3001:3001 ghcr.io/shadowoff09/cinema-quotes:latest
```

Or

```bash
  docker run -d \
  -p 3001:3001 \
  --name cinema-quotes \
  --restart=always \
  ghcr.io/shadowoff09/cinema-quotes:latest
```

## Deploying from Source 🔨

You will need [git](https://git-scm.com/downloads), the latest or LTS version of [Node.js](https://nodejs.org/) installed on your system.

- Clone the Repo: `git clone https://github.com/shadowoff09/cinema-quotes.git` and `cd cinema-quotes`
- Install dependencies: `npm i`
- Run: `npm run start`

## Donate
If you liked this project feel free to donate me for future awesome projects!</br>
- [Paypal](https://paypal.me/diogogaspar123)</br>
- [Ko-fi](https://ko-fi.com/shadowoff09)

## Other Versions

- [strangerthings-quotes](https://github.com/shadowoff09/strangerthings-quotes)
- [bcs-quotes](https://github.com/shadowoff09/bcs-quotes)

- [lucifer-quotes](https://github.com/shadowoff09/lucifer-quotes)

---

Made with :heart: and JavaScript.
