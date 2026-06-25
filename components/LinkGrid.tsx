import type { BookmarkLink, Folder } from "@/app/_lib/mock-data";
import LinkCard from "@/components/LinkCard";

export default function LinkGrid({
  links,
  folders,
}: {
  links: BookmarkLink[];
  folders: Folder[];
}) {
  if (links.length === 0) {
    return (
      <p className="py-20 text-center text-sm text-[var(--text-sub)]">
        등록된 글이 없습니다
      </p>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {links.map((link) => (
        <LinkCard
          key={link.id}
          link={link}
          folder={folders.find((folder) => folder.id === link.folderId)}
        />
      ))}
    </div>
  );
}
