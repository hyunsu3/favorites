import type { BookmarkLink, Folder } from "@/app/_lib/mock-data";
import FolderBadge from "@/components/FolderBadge";

export default function LinkCard({
  link,
  folder,
}: {
  link: BookmarkLink;
  folder?: Folder;
}) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col gap-2 rounded-lg border border-black/[.08] p-4 transition-colors hover:bg-black/[.04]"
    >
      {folder && <FolderBadge folder={folder} />}
      <span className="truncate text-sm font-medium text-black">
        {link.title}
      </span>
      <span className="truncate text-xs text-zinc-500">{link.url}</span>
    </a>
  );
}
