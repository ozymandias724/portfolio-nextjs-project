import { promises as fs } from "fs";
import path from "path";

// Load the MDX content associated with a project slug.
//
// Example:
// slug: "aviphy"
// -> content/projects/aviphy.mdx
//
// Project metadata lives in lib/projects.ts while long-form
// project content is stored separately as MDX files.
export async function getProjectContent(slug: string) {
  const filePath = path.join(
    process.cwd(),
    "content",
    "projects",
    `${slug}.mdx`,
  );

  // Read the raw MDX source file so it can be rendered
  // later by the MDXContent component.
  return fs.readFile(filePath, "utf8");
}
// NOTE:
// This works locally because the content directory exists on disk.
//
// Cloudflare deployment is currently failing when reading MDX
// content at runtime. If the issue returns, investigate whether
// content should be loaded at build time instead.