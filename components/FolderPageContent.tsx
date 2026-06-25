"use client";

import { useFolders } from "@/app/_lib/folders-context";
import { useLinks } from "@/app/_lib/links-context";
import LinkGrid from "@/components/LinkGrid";

export default function FolderPageContent({ folderId }: { folderId: string }) {
  const { folders } = useFolders();
  const { links } = useLinks();
  const folder = folders.find((item) => item.id === folderId);

  if (!folder) {
    return (
      <p className="py-20 text-center text-sm text-[var(--text-sub)]">
        존재하지 않는 폴더입니다
      </p>
    );
  }

  const folderLinks = links.filter((link) => link.folderId === folderId);

  return <LinkGrid links={folderLinks} folders={folders} />;
}
