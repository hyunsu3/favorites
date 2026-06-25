"use client";

import { useFolders } from "@/app/_lib/folders-context";
import { useLinks } from "@/app/_lib/links-context";
import LinkGrid from "@/components/LinkGrid";

export default function HomePageContent() {
  const { folders } = useFolders();
  const { links } = useLinks();

  return <LinkGrid links={links} folders={folders} />;
}
