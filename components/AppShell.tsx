import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { folders } from "@/app/_lib/mock-data";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full flex-1 flex-col bg-zinc-50 dark:bg-black">
      <Header />
      <div className="flex flex-1">
        <Sidebar folders={folders} />
        <main className="flex-1 overflow-auto p-6">{children}</main>
      </div>
    </div>
  );
}
