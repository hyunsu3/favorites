import Link from "next/link";
import type { Folder } from "@/app/_lib/mock-data";

export default function FolderList({ folders }: { folders: Folder[] }) {
  return (
    <ul className="flex flex-col gap-1">
      {folders.map((folder) => (
        <li key={folder.id}>
          <Link
            href={`/folder/${folder.id}`}
            className="block w-full rounded-md px-3 py-2 text-left text-sm text-zinc-600 transition-colors hover:bg-black/[.04]"
          >
            {folder.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
