export type BookmarkLink = {
  id: string;
  title: string;
  url: string;
  folderId: string;
};

export type Folder = {
  id: string;
  name: string;
  color: string;
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
  },
  {
    id: "2",
    title: "Tailwind CSS",
    url: "https://tailwindcss.com",
    folderId: "dev",
  },
  {
    id: "3",
    title: "MDN Web Docs",
    url: "https://developer.mozilla.org",
    folderId: "dev",
  },
  {
    id: "4",
    title: "Dribbble",
    url: "https://dribbble.com",
    folderId: "design",
  },
  {
    id: "5",
    title: "Figma",
    url: "https://figma.com",
    folderId: "design",
  },
  {
    id: "6",
    title: "Smashing Magazine",
    url: "https://smashingmagazine.com",
    folderId: "article",
  },
  {
    id: "7",
    title: "GitHub",
    url: "https://github.com",
    folderId: "etc",
  },
];
