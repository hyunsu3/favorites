import type { Folder } from "@/app/_lib/mock-data";

export default function FolderSelect({ folders }: { folders: Folder[] }) {
  return (
    <select
      id="folder"
      name="folder"
      className="w-full rounded-md border border-black/[.08] bg-transparent px-3 py-2 text-sm text-black focus:outline-none dark:border-white/[.145] dark:text-zinc-50"
    >
      <option value="">폴더 선택</option>
      {folders.map((folder) => (
        <option key={folder.id} value={folder.id}>
          {folder.name}
        </option>
      ))}
    </select>
  );
}
