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
    slug: "nu-start-theme",
    title: "NU Start (Theme)",
    featured: true,

    shortDescription:
      "NU_Start is a WordPress theme built using Gutenberg (Block Editor) for Northeastern University's Global Campus initiative. The theme is designed to be deployed across multiple sites within the university, providing a consistent and modern design framework that can be easily customized to meet the specific needs of each site. It includes a variety of pre-designed templates and styles, as well as support for custom blocks and widgets to enhance functionality.",

    status: "Client",
  },
  {
    slug: "nu-start-blocks",
    title: "NU Start (Blocks)",
    featured: true,

    shortDescription:
      "NU_Start is a WordPress theme built using Gutenberg (Block Editor) for Northeastern University's Global Campus initiative. The project includes a custom block library that provides a set of reusable blocks for content creation, allowing for flexible and dynamic page layouts.",

    status: "Client",
  },
];
