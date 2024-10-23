<p align="center">
    <img width="350px" src="https://i.imgur.com/6r83blS.png">
</p>
<p align="center">
    <a href="https://github.com/vtempest/Serverless-DOCS-Stack/discussions">
    <img alt="GitHub Discussions"
        src="https://img.shields.io/github/discussions/vtempest/Serverless-DOCS-Stack">
    </a>
    <a href="http://makeapullrequest.com">
        <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs Welcome">
    </a>
    <a href="https://codespaces.new/vtempest/Serverless-DOCS-Stack">
    <img src="https://github.com/codespaces/badge.svg" width="150" height="20">
    </a>
</p>
<h3 align="center">
  <a href="https://serverless-docs-stack.vtempest.workers.dev">Live Demo </a>
</h3>

### ⚒️ Serverless DOCS Stack: Drizzle OAuth Cloudflare Svelte 

📚 [Drizzle ORM](https://orm.drizzle.team/kit-docs/quick) - lightweight ORM compatible with Cloudflare D1 and drizzle-kit  to manage schema migrations

👤 [OAuth Lucia](https://github.com/lucia-auth/lucia) - Google oAuth sign-in and/or email signup via Resend mailer api, with 4 email templates: reset password, change email, verify email, welcome. Settings and admin panel for users.

☁️ [Cloudflare for Svelte](https://developers.cloudflare.com/pages/framework-guides/deploy-a-svelte-site/) - serverless autoscaling API and D1 database, great hosting platform with free tier

🖼️ [SvelteKit](https://github.com/sveltejs/kit) - full stack interface and API routes framework

### 🧩 Interface Components:

🎨 [Tailwind CSS](https://github.com/tailwindlabs/tailwindcss) + [Bits UI](https://github.com/huntabyte/bits-ui) + [shadcn-svelte](https://github.com/huntabyte/shadcn-svelte) - popular UI components which can be AI-generated at [v0.dev](https://v0.dev)

📝 [formsnap](https://github.com/svecosystem/formsnap) + [sveltekit-superforms](https://github.com/ciscoheat/sveltekit-superforms) + [zod](https://github.com/colinhacks/zod) - form validation

📱 [lucide](https://github.com/lucide-icons/lucide) -  icons

🛣️ [vite-plugin-kit-routes](https://github.com/jycouet/kitql/tree/main/packages/vite-plugin-kit-routes) - url routes

🌲 [pino](https://github.com/pinojs/pino) - logging


### Sreenshots

<img width="600px" src="https://i.imgur.com/jIaL6yP.png" />

<img  width="600px" src="https://i.imgur.com/NlkjlWI.png" />

### ⬇️ Installation

1. Install prerequisites Node.js or Bun `curl -fsSL https://bun.sh/install | bash`.
2. Clone to localhost or server `git clone https://github.com/vtempest/docs-stack-starter`.
3. CD to project directory `cd docs-stack-starter`.
4. `mv .env.example .env ; mv wrangler.example.toml wrangler.toml` and set the domain and API keys in `.env`.
5. Create/get `Client ID` and `Client secret` from OAuth 2.0 Client IDs on [Google Cloud Console](https://console.cloud.google.com/apis/credentials).
6. Set OAuth origin `http://localhost` and `http://localhost:5173` on local or `https://domain.com` on server.
7. Set redirect `http://localhost:5173/auth/oauth/google/callback` or `https://api.domain.com/auth/oauth/google/callback`.
8. For email auth, get API from [Resend](https://resend.com/api-keys) mailer and verify domain.
9.  Log in with your Cloudflare account by running: `bunx wrangler login`.
10. Create your D1 database via dashboard or with `bunx wrangler d1 create my-db-prod`.
11. Copy the console output database_name and database_id.
12. Go to `wrangler.toml` and change `database_name` and `database_id`.
13. Go to `drizzle.config.ts` and change db name in `dbName`.
14. Go to `package.json` and change db name in `db:push:*` and `db:backup:prod`.
15. Set the `name` for your project in `package.json`.

### Local development

#### Running locally with live updates

1. Install dependencies `bun install`.
2. Generate the DB schema: `bun run db:migrate`.
3. Apply the DB migrations to the local DB: `bun run db:push:dev`
4. Develop on local with `bun run dev`.

#### Local D1 database explorer with Drizzle Studio

1. `bun run db:studio:dev`

### Deployment to production

There are two ways to do this, either in the command line or by connecting a remote git repository in your Cloudflare dashboard.

1. In any case apply the DB migrations to the remote DB: `bun run db:push:prod`

#### Deploying from the command line

This will give you the benefit of seeing a live logfile in your terminal.

1. Deploy to prod with `bun run deploy`.
2. Update `.env` and `wrangler.toml` files `PUBLIC_BASE_URL=` with deployment URL.

#### Deploying from Cloudflare dashboard

This will give you the benefit of automatic deployments by committing to a remote git repository.

1. Commit and push to a remote repository (on Github or GitLab).
2. Connect your remote repository from the Cloudflare Dashboard ([instructions](https://developers.cloudflare.com/pages/get-started/git-integration/)):
   1. For the build command setting use `bun run build`.
   2. Add every variable from your `.env` file and make sure to encrypt each one.
   3. Deploy and verify that the deployment succeeds.
   4. Optionally configure a custom domain.

#### Use Drizzle Studio to browse your production DB:

 - `bun run db:studio:prod`
