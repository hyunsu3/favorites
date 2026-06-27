"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import type { BookmarkLink } from "@/app/_lib/mock-data";
import { supabase } from "@/lib/supabase";

type NewLinkInput = {
  url: string;
  folderId: string;
  title: string;
  description?: string;
  thumbnail?: string;
  siteName?: string;
};

type LinkUpdate = {
  folderId?: string;
  title?: string;
  description?: string;
};

type LinksContextValue = {
  links: BookmarkLink[];
  addLink: (input: NewLinkInput) => Promise<void>;
  updateLink: (id: string, update: LinkUpdate) => Promise<void>;
  deleteLink: (id: string) => Promise<void>;
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

  async function addLink(input: NewLinkInput) {
    const { data, error } = await supabase
      .from("links")
      .insert({
        url: input.url,
        title: input.title,
        description: input.description ?? null,
        thumbnail_url: input.thumbnail ?? null,
        folder_id:
          input.folderId && !isNaN(Number(input.folderId))
            ? Number(input.folderId)
            : null,
      })
      .select("*")
      .single();
    if (error) throw error;
    setLinks((prev) => [
      ...prev,
      {
        id: String(data.id),
        url: data.url,
        title: data.title ?? data.url,
        folderId: data.folder_id ? String(data.folder_id) : "",
        description: data.description ?? undefined,
        thumbnail: data.thumbnail_url ?? undefined,
      },
    ]);
  }

  async function updateLink(id: string, update: LinkUpdate) {
    const { error } = await supabase
      .from("links")
      .update({
        ...(update.title !== undefined && { title: update.title }),
        ...(update.description !== undefined && { description: update.description ?? null }),
        ...(update.folderId !== undefined && {
          folder_id: update.folderId && !isNaN(Number(update.folderId)) ? Number(update.folderId) : null,
        }),
      })
      .eq("id", Number(id));
    if (error) throw error;
    setLinks((prev) =>
      prev.map((link) => (link.id === id ? { ...link, ...update } : link)),
    );
  }

  async function deleteLink(id: string) {
    const { error } = await supabase.from("links").delete().eq("id", Number(id));
    if (error) throw error;
    setLinks((prev) => prev.filter((link) => link.id !== id));
  }

  return (
    <LinksContext.Provider value={{ links, addLink, updateLink, deleteLink }}>
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
