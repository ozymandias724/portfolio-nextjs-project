import Link from "next/link";

import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/layout/PageLayout";

import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
// import { Metadata } from "next";



const featuredProjects = projects.filter(
  (project) => project.featured
);

export default function HomePage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-24">
        <div className="max-w-3xl">
          <p className="eyebrow">Hi, I'm Kyle.</p>

          <h1 className="mt-4">
            Frontend Developer Building Modern Web Experiences
          </h1>

          <p className="lead mt-6">
            I create fast, accessible, and maintainable web applications using
            React, TypeScript, Next.js, and modern development workflows.
          </p>

          <div className="mt-8 flex gap-4">
            <Button asChild>
              <Link href="/projects">View Projects</Link>
            </Button>

            <Button variant="outline" asChild>
              <Link href="/contact">Contact Me</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16">
        <div className="max-w-5xl">
          <h2>Featured Projects</h2>

          <p className="lead mt-4">
            A selection of personal and professional work showcasing modern web
            development practices.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Technical Focus */}
      <section className="py-16">
        <div className="max-w-5xl">
          <h2>Technical Focus</h2>

          <p className="lead mt-4">
            Technologies and tools I regularly use to design, build, and deploy
            modern web applications.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3"></div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24">
        <div className="max-w-3xl">
          <h2>Let's Build Something Great</h2>

          <p className="lead mt-4">
            I'm always interested in discussing new projects, opportunities, and
            interesting technical challenges.
          </p>

          <div className="mt-8">
            <Button asChild>
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
