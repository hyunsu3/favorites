"use client";

import { useState } from "react";
import Link from "next/link";
import TrashIcon from "@/components/TrashIcon";
import DeleteFolderModal from "@/components/DeleteFolderModal";
import type { Folder } from "@/app/_lib/mock-data";

export default function FolderListItem({ folder }: { folder: Folder }) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  return (
    <li className="folder-row">
      <Link href={`/folder/${folder.id}`} className="folder-link">
        {folder.name}
      </Link>
      <button
        type="button"
        onClick={() => setIsDeleteModalOpen(true)}
        aria-label={`${folder.name} 폴더 삭제`}
        className="folder-delete-btn"
      >
        <TrashIcon />
      </button>
      <DeleteFolderModal
        folder={folder}
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
      />
    </li>
  );
}
