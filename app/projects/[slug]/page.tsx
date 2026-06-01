import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { projects } from "@/lib/projects";
import { PageLayout } from "@/components/layout/PageLayout";


export const metadata: Metadata = {
  title: "Projects",
  description:
    "A collection of software projects, open-source work, and experiments built with modern web technologies.",
};



export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    return <h1>Project not found</h1>;
  }

  return (
    <PageLayout>
      <article className="py-16">
        {project.heroImage && (
          <div className="mb-12 overflow-hidden rounded-xl border">
            <Image
              src={project.heroImage}
              alt={project.title}
              width={1600}
              height={900}
              className="aspect-video w-full object-cover"
            />
          </div>
        )}

        <div className="max-w-3xl">
          {project.status && <p className="eyebrow">{project.status}</p>}

          <h1 className="mt-4">{project.title}</h1>

          <p className="lead mt-6">{project.shortDescription}</p>

          {project.technologies?.length && (
            <div className="mt-8 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <Badge key={technology} variant="secondary">
                  {technology}
                </Badge>
              ))}
            </div>
          )}

          {(project.githubUrl || project.liveUrl) && (
            <div className="mt-8 flex flex-wrap gap-4">
              {project.githubUrl && (
                <Button asChild variant="outline">
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Source
                  </Link>
                </Button>
              )}

              {project.liveUrl && (
                <Button asChild>
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </Link>
                </Button>
              )}
            </div>
          )}

          {project.content && (
            <div className="mt-12 space-y-6">
              <p>{project.content}</p>
            </div>
          )}
        </div>
      </article>
    </PageLayout>
  );
}
