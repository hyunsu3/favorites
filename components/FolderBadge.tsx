import type { Folder } from "@/app/_lib/mock-data";

export default function FolderBadge({ folder }: { folder: Folder }) {
  return (
    <span
      className={`inline-flex w-fit items-center rounded-full px-2 py-0.5 text-xs font-medium ${folder.color ?? "bg-slate-100 text-slate-700"}`}
    >
      {folder.name}
    </span>
  );
}
