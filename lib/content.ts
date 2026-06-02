import { promises as fs } from "fs";
import path from "path";

export async function getProjectContent(slug: string) {
  const filePath = path.join(
    process.cwd(),
    "content",
    "projects",
    `${slug}.mdx`
  );

  return fs.readFile(filePath, "utf8");
}