import Link from "next/link";
import Image from "next/image";

import type { Project } from "@/lib/projects";

import { Badge } from "@/components/ui/badge";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <Card className="h-full overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg">
        {project.thumbnail && (
          <Image
            src={project.thumbnail}
            alt={project.title}
            width={800}
            height={450}
            className="aspect-video w-full object-cover"
          />
        )}

        <CardHeader>
          {project.status && (
            <CardDescription>{project.status}</CardDescription>
          )}

          <CardTitle>{project.title}</CardTitle>
        </CardHeader>

        <CardContent>
          <p>{project.shortDescription}</p>

          {project.technologies?.length && (
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <Badge key={technology} variant="secondary">
                  {technology}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}
