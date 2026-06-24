import Link from "next/link";
import NewFolderButton from "@/components/NewFolderButton";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 flex h-14 items-center justify-between bg-[var(--card-bg)] px-5 shadow-[0_1px_0_rgba(0,0,0,0.06)]">
      <span className="text-xl font-bold text-[var(--text)]">초코프레스</span>
      <div className="flex items-center gap-2">
        <NewFolderButton />
        <Link href="/new" className="btn-primary">
          + 새 링크
        </Link>
      </div>
    </header>
  );
}
