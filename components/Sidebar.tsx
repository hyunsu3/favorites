import type { Folder } from "@/app/_lib/mock-data";
import FolderList from "@/components/FolderList";

export default function Sidebar({ folders }: { folders: Folder[] }) {
  return (
    <aside className="w-56 shrink-0 border-r border-black/[.08] p-4">
      <button className="w-full rounded-md bg-black/[.04] px-3 py-2 text-left text-sm font-medium text-black">
        All
      </button>
      <div className="mt-4">
        <FolderList folders={folders} />
      </div>
    </aside>
  );
}
