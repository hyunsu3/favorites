import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b border-black/[.08] px-6 py-4">
      <span className="text-xl font-bold tracking-tight text-black">
        초코프레스
      </span>
      <Link
        href="/new"
        className="rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-[#383838]"
      >
        + 새 링크
      </Link>
    </header>
  );
}
