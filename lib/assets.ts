// ============================================================================
// Build time checks for optional files the client may drop into /public.
// A missing file simply hides the block that would have used it.
// ============================================================================

import fs from "node:fs";
import path from "node:path";

export function publicFileExists(relativePath: string): boolean {
  try {
    return fs.existsSync(path.join(process.cwd(), "public", relativePath));
  } catch {
    return false;
  }
}
