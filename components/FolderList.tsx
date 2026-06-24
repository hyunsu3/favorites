"use client";

import Link from "next/link";
import { useFolders } from "@/app/_lib/folders-context";

export default function FolderList() {
  const { folders } = useFolders();

  return (
    <ul className="flex flex-col gap-1">
      {folders.map((folder) => (
        <li key={folder.id}>
          <Link
            href={`/folder/${folder.id}`}
            className="block w-full rounded-xl px-3 py-2 text-left text-sm text-[var(--text-sub)] transition-colors hover:bg-[var(--background)]"
          >
            {folder.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
