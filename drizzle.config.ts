import path from "node:path";
import fs from "node:fs";
import type { Config } from "drizzle-kit";
import { defineConfig } from "drizzle-kit";

/**
 * This is a temporary fix because of a drizzle-kit bug
 * https://github.com/drizzle-team/drizzle-kit-mirror/issues/321
 * So we can use better-sqlite3 driver instead of D1
 * You can delete this code and "better-sqlite3" dependency when this issue will be fixed
 */

function getLocalD1DB() {
  try {
    const basePath = path.resolve('.wrangler');
    const dbFile = fs
      .readdirSync(basePath, { encoding: 'utf-8', recursive: true })
      .find((f) => f.endsWith('.sqlite'));

    if (!dbFile) {
      throw new Error(`.sqlite file not found in ${basePath}`);
    }

    const url = path.resolve(basePath, dbFile);
    return url;
  } catch (err) {
    console.log(`Error  ${err.message}`);
  }
}

export default defineConfig({
  schema: "src/lib/server/db/schema.ts",
  out: "migrations",
  dialect: "sqlite",
  ...(process.env.NODE_ENV === 'production'
    ? {
      driver: 'd1-http',
      dbCredentials: {
        accountId: process.env.CLOUDFLARE_ACCOUNT_ID,
        databaseId: process.env.CLOUDFLARE_D1_DB_ID,
        token: process.env.CLOUDFLARE_D1_API_TOKEN
      }
    }
    : {
      dbCredentials: {
        url: `file:${getLocalD1DB()}`
      }
    })
}) satisfies Config;