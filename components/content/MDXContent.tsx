import { MDXRemote } from "next-mdx-remote/rsc";

type MDXContentProps = {
  // Raw MDX content loaded from the project's content directory.
  source: string;
};

export function MDXContent({ source }: MDXContentProps) {
  return (
    // Shared wrapper for all MDX-rendered content.
    // Keeps typography styling consistent across project pages.
    <div className="prose prose-neutral max-w-none">
      {/* Render MDX content on the server using Next.js RSC support. */}
      <MDXRemote source={source} />
    </div>
  );
}