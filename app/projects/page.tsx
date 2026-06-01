import { PageLayout } from "@/components/layout/PageLayout";

import { projects } from "@/lib/projects";

import { ProjectCard } from "@/components/projects/ProjectCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A collection of software projects, open-source work, and experiments built with modern web technologies.",
};

export default function ProjectsPage() {
  return (
    <PageLayout>
      <section className="py-16">
        <div className="max-w-3xl">
          <h1>Projects</h1>

          <p className="lead mt-6">
            A collection of personal and professional projects
            exploring modern web development, open-source
            software, and application architecture.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
            />
          ))}
        </div>
      </section>
    </PageLayout>
  );
}