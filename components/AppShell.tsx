import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { FoldersProvider } from "@/app/_lib/folders-context";
import { LinksProvider } from "@/app/_lib/links-context";
import { folders, links } from "@/app/_lib/mock-data";

export default function AppShell({ children }: { children: React.ReactNode }) {
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
