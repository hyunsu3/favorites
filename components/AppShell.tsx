import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { FoldersProvider } from "@/app/_lib/folders-context";
import { LinksProvider } from "@/app/_lib/links-context";
import type { Folder, BookmarkLink } from "@/app/_lib/mock-data";
import { supabase } from "@/lib/supabase";

export default async function AppShell({ children }: { children: React.ReactNode }) {
  const [{ data: foldersData }, { data: linksData }] = await Promise.all([
    supabase.from("folders").select("id, name").order("created_at"),
    supabase.from("links").select("*").order("created_at"),
  ]);

  const folders: Folder[] = (foldersData ?? []).map((f) => ({ id: String(f.id), name: f.name }));
  const links: BookmarkLink[] = (linksData ?? []).map((l) => ({
    id: String(l.id),
    url: l.url,
    title: l.title ?? l.url,
    folderId: l.folder_id ? String(l.folder_id) : "",
    description: l.description ?? undefined,
    thumbnail: l.thumbnail_url ?? undefined,
  }));

  return (
    <FoldersProvider initialFolders={folders}>
      <LinksProvider initialLinks={links}>
        <div className="flex h-full flex-1 flex-col bg-[var(--background)]">
          <Header />
          <div className="flex flex-1">
            <Sidebar />
            <main className="flex-1 overflow-auto p-6">{children}</main>
          </div>
        </div>
      </LinksProvider>
    </FoldersProvider>
  );
}
