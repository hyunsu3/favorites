"use client";

import { useState } from "react";
import Modal from "@/components/Modal";
import { useFolders } from "@/app/_lib/folders-context";
import type { Folder } from "@/app/_lib/mock-data";

export default function DeleteFolderModal({
  folder,
  isOpen,
  onClose,
}: {
  folder: Folder;
  isOpen: boolean;
  onClose: () => void;
}) {
  const { deleteFolder } = useFolders();
  const [isDeleting, setIsDeleting] = useState(false);

  async function handleDelete() {
    if (isDeleting) return;
    setIsDeleting(true);
    try {
      await deleteFolder(folder.id);
      onClose();
    } finally {
      setIsDeleting(false);
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-lg font-bold text-[var(--text)]">폴더 삭제</h2>
      <p className="mt-2 text-sm text-[var(--text-sub)]">
        &apos;{folder.name}&apos; 폴더를 삭제하시겠습니까?
      </p>
      <div className="mt-5 flex justify-end gap-2">
        <button type="button" onClick={onClose} className="btn-secondary">
          취소
        </button>
        <button type="button" onClick={handleDelete} disabled={isDeleting} className="btn-danger">
          {isDeleting ? "삭제 중..." : "삭제"}
        </button>
      </div>
    </Modal>
  );
}
