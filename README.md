# ToolCrate — starter project

This ZIP contains the 11 foundational STEP 2 files plus a minimal homepage and Cloudflare Workers deployment configuration.

## Requirements
- Node.js 20.0 or newer
- npm
- A Cloudflare account for deployment

## Install and run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Check types
```bash
npm run typecheck
```

## Preview in the Cloudflare Workers runtime
```bash
npm run preview
```

## Deploy to Cloudflare Workers
```bash
npm run deploy
```

The first deployment requires signing in to Cloudflare when Wrangler prompts you. Configure your custom domain in the Cloudflare Workers dashboard after deployment.

## Important
- This is a starter foundation, not the finished full directory. Tool data, individual tool pages, category pages, blog, admin panel, database, and legal-page content still need to be implemented.
- Replace the support email and add verified social URLs before launch.
- The project uses Next.js with the OpenNext Cloudflare adapter on Cloudflare Workers. Cloudflare currently recommends vinext for new Next.js projects; OpenNext remains a documented path for existing Next.js apps.
