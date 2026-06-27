"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import type { Folder } from "@/app/_lib/mock-data";
import { supabase } from "@/lib/supabase";

type FoldersContextValue = {
  folders: Folder[];
  addFolder: (name: string) => Promise<void>;
  renameFolder: (id: string, name: string) => Promise<void>;
  deleteFolder: (id: string) => void;
};

const FoldersContext = createContext<FoldersContextValue | null>(null);

export function FoldersProvider({
  initialFolders,
  children,
}: {
  initialFolders: Folder[];
  children: ReactNode;
}) {
  const [folders, setFolders] = useState(initialFolders);

  async function addFolder(name: string) {
    const { data, error } = await supabase
      .from("folders")
      .insert({ name })
      .select("id, name")
      .single();
    if (error) throw error;
    setFolders((prev) => [...prev, { id: String(data.id), name: data.name }]);
  }

  async function renameFolder(id: string, name: string) {
    const { error } = await supabase
      .from("folders")
      .update({ name })
      .eq("id", Number(id));
    if (error) throw error;
    setFolders((prev) =>
      prev.map((folder) => (folder.id === id ? { ...folder, name } : folder)),
    );
  }

  function deleteFolder(id: string) {
    setFolders((prev) => prev.filter((folder) => folder.id !== id));
  }

  return (
    <FoldersContext.Provider
      value={{ folders, addFolder, renameFolder, deleteFolder }}
    >
      {children}
    </FoldersContext.Provider>
  );
}

export function useFolders() {
  const context = useContext(FoldersContext);
  if (!context) {
    throw new Error("useFolders must be used within a FoldersProvider");
  }
  return context;
}
