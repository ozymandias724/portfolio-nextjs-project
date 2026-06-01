import { PageLayout } from "@/components/layout/PageLayout";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch regarding software development, technical leadership, collaboration, or consulting opportunities.",
};
export default function ContactPage() {
  return (
    <PageLayout>
      <section className="py-16">
        <div className="grid gap-12 lg:grid-cols-[280px_1fr]">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold">Get In Touch</h2>

                <p className="mt-2 text-muted-foreground">
                  Whether you're looking for a developer, technical lead,
                  collaborator, or simply want to discuss an interesting idea,
                  I'd love to hear from you.
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
                    href="#"
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
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {siteConfig.socials.linkedin}
                  </a>
                </div>

                <div>
                  <p className="font-medium">Location</p>

                  <p className="text-muted-foreground">Maine, United States</p>
                </div>
              </div>
            </div>
          </aside>

          <article>
            <h1>Contact</h1>

            <p className="lead mt-6">
              Have a project in mind, a question, or an opportunity you'd like
              to discuss? Send me a message and I'll get back to you as soon as
              possible.
            </p>

            <form className="mt-12 space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name">{siteConfig.name}</label>

                  <Input
                    id="name"
                    name="name"
                    autoComplete="name"
                    placeholder="Jane Doe"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email">{siteConfig.email}</label>

                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject">Subject</label>

                <Input
                  id="subject"
                  name="subject"
                  placeholder="Let's discuss a project"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message">Message</label>

                <Textarea
                  id="message"
                  name="message"
                  rows={8}
                  placeholder="Tell me a little about your project, goals, or what you'd like to discuss..."
                />
              </div>

              <Button type="submit">Send Message</Button>
            </form>
          </article>
        </div>
      </section>
    </PageLayout>
  );
}
