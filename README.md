# ServerDen

Infrastructure, Kubernetes, automation testing, scripting and systems engineering tutorials.

## Topics

- Kubernetes
- Linux servers
- Docker
- Automation testing
- K6 browser
- CI/CD
- Bash scripting
- Infrastructure automation
- Monitoring & observability
- Homelab engineering

## Content Philosophy

ServerDen focuses on practical, production-oriented technical content:

- Real infrastructure examples
- Reproducible tutorials
- Engineering-first approach
- Automation and operational excellence

## Planned Features

- Technical tutorials
- Search
- RSS feeds
- Tags & categories
- Architecture diagrams
- Code snippet enhancements

## Deployment

Primary deployment target:

```txt
Cloudflare Pages
```

Recommended Pages settings:

```txt
Framework preset: Astro
Build command: npm run build
Build output directory: dist
Node.js version: 22
```

Optional environment variable:

```txt
SITE=https://your-production-domain.example
```

Set `SITE` in Cloudflare Pages so Astro can generate absolute URLs and enable the
sitemap integration in production builds.

Future hosting options:

- Kubernetes
- Docker
- Self-hosted infrastructure

## License

MIT