import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/**
 * /robots.txt
 *
 * Everything is open. The assistant crawlers are then named again on their
 * own line: a bare "*" already allows them, but naming them records that the
 * firm wants its pages read and quoted by these tools, and it survives any
 * future tightening of the wildcard rule.
 *
 * Google-Extended and Applebot-Extended are the two that genuinely change
 * behaviour: they govern whether Gemini and Apple Intelligence may ground
 * their answers in this site.
 */
const ASSISTANT_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "Amazonbot",
  "Bytespider",
  "CCBot",
  "cohere-ai",
  "DuckAssistBot",
  "MistralAI-User",
  "YouBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: ASSISTANT_CRAWLERS, allow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
