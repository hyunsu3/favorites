"use client";

import { useFolders } from "@/app/_lib/folders-context";
import LinkGrid from "@/components/LinkGrid";
import { links } from "@/app/_lib/mock-data";

export default function HomePageContent() {
  const { folders } = useFolders();

  return <LinkGrid links={links} folders={folders} />;
}
