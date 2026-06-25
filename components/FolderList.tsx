"use client";

import { useFolders } from "@/app/_lib/folders-context";
import FolderListItem from "@/components/FolderListItem";

export default function FolderList() {
  const { folders } = useFolders();

  return (
    <ul className="flex flex-col gap-1">
      {folders.map((folder) => (
        <FolderListItem key={folder.id} folder={folder} />
      ))}
    </ul>
  );
}
