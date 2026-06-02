import { MDXRemote } from "next-mdx-remote/rsc";

type MDXContentProps = {
  source: string;
};

export function MDXContent({ source }: MDXContentProps) {
  return (
    <div className="prose prose-neutral max-w-none">
      <MDXRemote source={source} />
    </div>
  );
}