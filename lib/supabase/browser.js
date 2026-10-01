"use client";

import { createBrowserClient } from "@supabase/ssr";

let client;

export function createClient() {
  if (client) return client;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const publishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if (!url || !publishableKey) {
    throw new Error("Supabase environment variables are not configured.");
  }

  client = createBrowserClient(url, publishableKey);
  return client;
}
