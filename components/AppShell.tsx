import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { FoldersProvider } from "@/app/_lib/folders-context";
import { LinksProvider } from "@/app/_lib/links-context";
import { links, folders as mockFolders } from "@/app/_lib/mock-data";
import type { Folder } from "@/app/_lib/mock-data";
import { supabase } from "@/lib/supabase";

export default async function AppShell({ children }: { children: React.ReactNode }) {
  const { data } = await supabase.from("folders").select("id, name").order("created_at");
  const supabaseFolders: Folder[] = (data ?? []).map((f) => ({ id: String(f.id), name: f.name }));
  const folders: Folder[] = [...mockFolders, ...supabaseFolders];

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
