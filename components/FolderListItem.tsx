"use client";

import { useState } from "react";
import Link from "next/link";
import PencilIcon from "@/components/PencilIcon";
import TrashIcon from "@/components/TrashIcon";
import EditFolderModal from "@/components/EditFolderModal";
import DeleteFolderModal from "@/components/DeleteFolderModal";
import FolderBadge from "@/components/FolderBadge";
import type { Folder } from "@/app/_lib/mock-data";

export default function FolderListItem({ folder }: { folder: Folder }) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  return (
    <li className="folder-row">
      <Link href={`/folder/${folder.id}`} className="folder-link">
        <FolderBadge folder={folder} />
      </Link>
      <div className="folder-actions">
        <button
          type="button"
          onClick={() => setIsEditModalOpen(true)}
          aria-label={`${folder.name} 폴더 수정`}
          className="folder-action-btn folder-edit-btn"
        >
          <PencilIcon />
        </button>
        <button
          type="button"
          onClick={() => setIsDeleteModalOpen(true)}
          aria-label={`${folder.name} 폴더 삭제`}
          className="folder-action-btn folder-delete-btn"
        >
          <TrashIcon />
        </button>
      </div>
      <EditFolderModal
        folder={folder}
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
      />
      <DeleteFolderModal
        folder={folder}
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
      />
    </li>
  );
}
