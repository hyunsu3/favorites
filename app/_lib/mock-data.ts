export type BookmarkLink = {
  id: string;
  title: string;
  url: string;
  folderId: string;
  description?: string;
  thumbnail?: string;
  siteName?: string;
};

export type Folder = {
  id: string;
  name: string;
  color?: string;
};

export const folders: Folder[] = [
  {
    id: "dev",
    name: "개발",
    color: "bg-blue-100 text-blue-700",
  },
  {
    id: "design",
    name: "디자인",
    color: "bg-pink-100 text-pink-700",
  },
  {
    id: "article",
    name: "아티클",
    color: "bg-amber-100 text-amber-700",
  },
  {
    id: "etc",
    name: "기타",
    color: "bg-emerald-100 text-emerald-700",
  },
];

export const links: BookmarkLink[] = [
  {
    id: "1",
    title: "Next.js Documentation",
    url: "https://nextjs.org/docs",
    folderId: "dev",
    description: "Welcome to the Next.js Documentation.",
    thumbnail:
      "https://nextjs.org/api/docs-og?title=Next.js%20Docs&sig=10b5e00dde2672ad",
    siteName: "nextjs.org",
  },
  {
    id: "2",
    title: "Tailwind CSS",
    url: "https://tailwindcss.com",
    folderId: "dev",
    description:
      "Tailwind CSS is a utility-first CSS framework for rapidly building modern websites without ever leaving your HTML.",
    thumbnail:
      "https://tailwindcss.com/opengraph-image.jpg?opengraph-image.0jwfhnd690..4.jpg",
    siteName: "tailwindcss.com",
  },
  {
    id: "3",
    title: "MDN Web Docs",
    url: "https://developer.mozilla.org",
    folderId: "dev",
    description:
      "The MDN Web Docs site provides information about Open Web technologies including HTML, CSS, and APIs for both Web sites and progressive web apps.",
    thumbnail: "https://developer.mozilla.org/mdn-social-image.46ac2375.png",
    siteName: "MDN Web Docs",
  },
  {
    id: "4",
    title: "Dribbble",
    url: "https://dribbble.com",
    folderId: "design",
    description:
      "Find Top Designers & Creative Professionals on Dribbble. We are where designers gain inspiration, feedback, community, and jobs. Your best resource to discover and connect with designers worldwide.",
    thumbnail:
      "https://cdn.dribbble.com/uploads/68059/original/f95c1a744395b01385a3685ba20daac0.png?1770659618",
    siteName: "Dribbble",
  },
  {
    id: "5",
    title: "Figma",
    url: "https://figma.com",
    folderId: "design",
    description:
      "Figma is the leading collaborative design platform for building meaningful products. Design, prototype, and build products faster—while gathering feedback all in one place.",
    thumbnail:
      "https://cdn.sanity.io/images/599r6htc/regionalized/b08d37520f7d5ad8d6562975b5932dd2d9a862bb-1200x630.gif?w=1200&q=70&fit=max&auto=format",
    siteName: "Figma",
  },
  {
    id: "6",
    title: "Smashing Magazine",
    url: "https://smashingmagazine.com",
    folderId: "article",
    description:
      "Magazine on CSS, JavaScript, front-end, accessibility, UX and design. For developers, designers and front-end engineers.",
    thumbnail: "https://smashingmagazine.com/images/smashing-homepage.png",
    siteName: "Smashing Magazine",
  },
  {
    id: "7",
    title: "GitHub",
    url: "https://github.com",
    folderId: "etc",
    description:
      "Join the world's most widely adopted, AI-powered developer platform where millions of developers, businesses, and the largest open source community build software that advances humanity.",
    thumbnail:
      "https://images.ctfassets.net/8aevphvgewt8/4pe4eOtUJ0ARpZRE4fNekf/f52b1f9c52f059a33170229883731ed0/GH-Homepage-Universe-img.png",
    siteName: "GitHub",
  },
];
