"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import FolderList from "@/components/FolderList";

export default function Sidebar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <aside className="w-56 shrink-0 bg-[var(--card-bg)] p-4 shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
      <Link
        href="/"
        className={`block w-full rounded-xl px-3 py-2 text-left text-sm font-medium transition-colors ${
          isHome
            ? "bg-[var(--accent-soft)] text-[var(--accent)]"
            : "text-[var(--text-sub)] hover:bg-[var(--background)]"
        }`}
      >
        All
      </Link>
      <div className="mt-4">
        <FolderList />
      </div>
    </aside>
  );
}
