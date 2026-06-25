"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import type { BookmarkLink } from "@/app/_lib/mock-data";

type NewLinkInput = {
  url: string;
  folderId: string;
  title: string;
  description?: string;
  thumbnail?: string;
  siteName?: string;
};

type LinksContextValue = {
  links: BookmarkLink[];
  addLink: (input: NewLinkInput) => void;
};

const LinksContext = createContext<LinksContextValue | null>(null);

export function LinksProvider({
  initialLinks,
  children,
}: {
  initialLinks: BookmarkLink[];
  children: ReactNode;
}) {
  const [links, setLinks] = useState(initialLinks);

  function addLink(input: NewLinkInput) {
    const newLink: BookmarkLink = {
      id: crypto.randomUUID(),
      ...input,
    };
    setLinks((prev) => [...prev, newLink]);
  }

  return (
    <LinksContext.Provider value={{ links, addLink }}>
      {children}
    </LinksContext.Provider>
  );
}

export function useLinks() {
  const context = useContext(LinksContext);
  if (!context) {
    throw new Error("useLinks must be used within a LinksProvider");
  }
  return context;
}
