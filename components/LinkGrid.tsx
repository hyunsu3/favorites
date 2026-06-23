import type { BookmarkLink, Folder } from "@/app/_lib/mock-data";
import LinkCard from "@/components/LinkCard";

export default function LinkGrid({
  links,
  folder,
}: {
  links: BookmarkLink[];
  folder?: Folder;
}) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {links.map((link) => (
        <LinkCard key={link.id} link={link} folder={folder} />
      ))}
    </div>
  );
}
