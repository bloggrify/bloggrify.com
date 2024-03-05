import { serverQueryContent } from "#content/server";
import { SitemapStream, streamToPromise } from "sitemap";
export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    // @ts-ignore
    const url = config.public.url?.replace(/\/$/, "");

    const docs = await serverQueryContent(event)
        .where({ listed: { $ne: false } })
        .find();
    const sitemap = new SitemapStream({
        hostname: url,
    });
    for (const doc of docs) {
        if (doc._path?.includes("/_dir")) {
            continue;
        }
        sitemap.write({
            url: url + doc._path,
        });
    }
    sitemap.end();
    return streamToPromise(sitemap);
});
