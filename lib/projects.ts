export type Project = {
  slug: string;
  title: string;
  featured: boolean;

  shortDescription: string;
  content?: string;

  thumbnail?: string;
  heroImage?: string;

  githubUrl?: string;
  liveUrl?: string;

  technologies?: string[];
  status?: string;
};

export const projects: Project[] = [
  {
    slug: "aviphy",
    title: "Aviphy",
    featured: true,

    thumbnail: "/projects/aviphy/thumbnail.webp",
    heroImage: "/projects/aviphy/hero.webp",

    shortDescription:
      "A lightweight JavaScript library for converting GIF and animated WebP media into modern AVIF formats.",

    githubUrl: "https://github.com/example/aviphy",
    liveUrl: "https://aviphy.dev",

    technologies: ["TypeScript", "FFmpeg", "AVIF"],

    status: "Open Source",
    content:
      "Aviphy is a JavaScript library that provides a simple API for converting GIF and animated WebP media into modern AVIF formats. It leverages FFmpeg under the hood to perform the conversion, allowing developers to easily integrate AVIF support into their web applications. Aviphy is designed to be lightweight and efficient, making it an ideal choice for optimizing media delivery and improving performance on the web.",
  },

  {
    slug: "portfolio-site",
    title: "Portfolio Site",
    featured: true,

    shortDescription:
      "A content-driven portfolio built with Next.js, TypeScript, Contentful, and Cloudflare Pages.",

    technologies: ["Next.js", "TypeScript", "Tailwind"],

    status: "In Progress",
  },

  {
    slug: "lorem-project-1",
    title: "Lorem Project Ipsum 1",
    featured: false,

    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",

    status: "Client Project",
  },

  {
    slug: "lorem-project-2",
    title: "Lorem Project Ipsum 2",
    featured: false,

    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",

    status: "Archived",
  },
];
