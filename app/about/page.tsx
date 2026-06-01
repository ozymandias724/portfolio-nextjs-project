import { PageLayout } from "@/components/layout/PageLayout";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Kyle Marcy, a senior web developer focused on modern web technologies, software architecture, and technical leadership.",
};

import { siteConfig } from "@/lib/site";
import Image from "next/image";

export default function AboutPage() {
  return (
    <PageLayout>
      <section className="py-16">
        <div className="grid gap-12 lg:grid-cols-[280px_1fr]">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="space-y-6">
              {/*  */}
              <Image
                src="./placeholder/placeholder.svg"
                alt={siteConfig.name}
                width={300}
                height={300}
                className="aspect-square overflow-hidden rounded-xl border bg-muted"
              />
              <div>
                <h2 className="text-xl font-semibold">{siteConfig.name}</h2>

                <p className="text-muted-foreground">{siteConfig.title}</p>
              </div>

              <div className="space-y-2 text-sm">
                <p>
                  Building modern web applications with React, Next.js, and
                  TypeScript.
                </p>
              </div>

              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-medium">Email</p>

                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {siteConfig.email}
                  </a>
                </div>

                <div>
                  <p className="font-medium">GitHub</p>

                  <a
                    href={siteConfig.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {siteConfig.socials.github}
                  </a>
                </div>

                <div>
                  <p className="font-medium">LinkedIn</p>

                  <a
                    href={siteConfig.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {siteConfig.socials.linkedin}
                  </a>
                </div>
              </div>
            </div>
          </aside>

          <article>
            <h1>About</h1>

            <p className="lead mt-6">
              I'm a senior web developer with experience leading projects,
              coordinating teams, and building solutions that balance business
              needs with long-term maintainability.
            </p>

            <div className="mt-12 space-y-12">
              <section>
                <h2>Background</h2>

                <div className="mt-4 space-y-4">
                  <p>
                    I've spent the last several years building, maintaining, and
                    leading web projects across the LAMP and WordPress
                    ecosystem. Along the way I've worn many hats: developer,
                    technical lead, code reviewer, release coordinator, and the
                    bridge between stakeholders, designers, and engineering
                    teams.
                  </p>

                  <p>
                    My experience extends beyond writing code. I've worked
                    across the entire project lifecycle, helping translate
                    business requirements into technical solutions, coordinating
                    implementation across teams, and ensuring that projects
                    remain maintainable long after launch.
                  </p>
                </div>
              </section>

              <section>
                <h2>Technical Perspective</h2>

                <div className="mt-4 space-y-4">
                  <p>
                    While my background is rooted in PHP, MySQL, WordPress, and
                    traditional web application architecture, I'm actively
                    expanding into modern frontend and full-stack technologies
                    including TypeScript, React, Next.js, and contemporary
                    deployment workflows.
                  </p>

                  <p>
                    Projects such as Aviphy and this portfolio are part of that
                    effort. They provide opportunities to explore modern
                    tooling, experiment with new approaches, and continue
                    developing as the web platform evolves.
                  </p>
                </div>
              </section>

              <section>
                <h2>Working With AI</h2>

                <div className="mt-4 space-y-4">
                  <p>
                    I view AI as a development multiplier rather than a
                    replacement for engineering fundamentals.
                  </p>

                  <p>
                    My workflow focuses on using AI as an advanced pair
                    programmer, research assistant, and technical sounding
                    board. The goal isn't to bypass understanding, but to
                    accelerate learning, improve implementation quality, and
                    spend more time solving meaningful problems.
                  </p>

                  <p>
                    Strong engineering still requires architectural thinking,
                    debugging skills, domain knowledge, and the ability to make
                    informed technical decisions. AI simply makes those
                    processes more efficient.
                  </p>
                </div>
              </section>

              <section>
                <h2>Building for the Long Term</h2>

                <div className="mt-4 space-y-4">
                  <p>
                    The most valuable lessons from leading projects have very
                    little to do with any specific framework or language.
                  </p>

                  <p>
                    Technology changes quickly. The underlying skills remain
                    remarkably consistent: understanding business requirements,
                    communicating with stakeholders, collaborating with
                    designers, planning for future maintenance, managing
                    technical debt, and delivering reliable solutions.
                  </p>

                  <p>
                    Whether the stack is WordPress, Next.js, or whatever comes
                    next, those principles continue to guide how I approach
                    software development.
                  </p>
                </div>
              </section>

              <section>
                <h2>Outside of the Code</h2>

                <div className="mt-4 space-y-4">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </section>
            </div>
          </article>
        </div>
      </section>
    </PageLayout>
  );
}
