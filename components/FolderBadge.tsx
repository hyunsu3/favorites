import type { Folder } from "@/app/_lib/mock-data";

const COLORS = [
  "bg-blue-100 text-blue-700",
  "bg-pink-100 text-pink-700",
  "bg-amber-100 text-amber-700",
  "bg-emerald-100 text-emerald-700",
  "bg-violet-100 text-violet-700",
  "bg-orange-100 text-orange-700",
  "bg-cyan-100 text-cyan-700",
  "bg-rose-100 text-rose-700",
];

function colorForFolder(folder: Folder) {
  if (folder.color) return folder.color;
  const num = parseInt(folder.id, 10);
  const index = isNaN(num)
    ? Math.abs(folder.id.split("").reduce((a, c) => a + c.charCodeAt(0), 0)) % COLORS.length
    : num % COLORS.length;
  return COLORS[index];
}

export default function FolderBadge({ folder }: { folder: Folder }) {
  return (
    <span
      className={`inline-flex w-fit items-center rounded-full px-2 py-0.5 text-xs font-medium ${colorForFolder(folder)}`}
    >
      {folder.name}
    </span>
  );
}
