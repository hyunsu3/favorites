"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import type { Folder } from "@/app/_lib/mock-data";

type FoldersContextValue = {
  folders: Folder[];
  addFolder: (name: string) => void;
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

  function addFolder(name: string) {
    const newFolder: Folder = {
      id: crypto.randomUUID(),
      name,
      color: "bg-slate-100 text-slate-700",
    };
    setFolders((prev) => [...prev, newFolder]);
  }

  return (
    <FoldersContext.Provider value={{ folders, addFolder }}>
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
