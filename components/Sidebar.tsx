import FolderList from "@/components/FolderList";

export default function Sidebar() {
  return (
    <aside className="w-56 shrink-0 bg-[var(--card-bg)] p-4 shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
      <button className="w-full rounded-xl bg-[var(--accent-soft)] px-3 py-2 text-left text-sm font-medium text-[var(--accent)]">
        All
      </button>
      <div className="mt-4">
        <FolderList />
      </div>
    </aside>
  );
}
