"use client";

import { useFolders } from "@/app/_lib/folders-context";

export default function FolderSelect({
  value,
  onChange,
}: {
  value?: string;
  onChange?: (value: string) => void;
} = {}) {
  const { folders } = useFolders();

  return (
    <select
      id="folder"
      name="folder"
      value={value}
      onChange={onChange ? (e) => onChange(e.target.value) : undefined}
      className="w-full rounded-md border border-black/[.08] bg-transparent px-3 py-2 text-sm text-black focus:outline-none"
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
