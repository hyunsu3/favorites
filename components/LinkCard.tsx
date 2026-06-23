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
      className="flex flex-col gap-2 rounded-lg border border-black/[.08] p-4 transition-colors hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-white/[.08]"
    >
      {folder && <FolderBadge folder={folder} />}
      <span className="truncate text-sm font-medium text-black dark:text-zinc-50">
        {link.title}
      </span>
      <span className="truncate text-xs text-zinc-500 dark:text-zinc-400">
        {link.url}
      </span>
    </a>
  );
}
