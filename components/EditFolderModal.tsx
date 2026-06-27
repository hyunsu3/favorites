"use client";

import { useEffect, useState, type FormEvent } from "react";
import Modal from "@/components/Modal";
import { useFolders } from "@/app/_lib/folders-context";
import type { Folder } from "@/app/_lib/mock-data";

export default function EditFolderModal({
  folder,
  isOpen,
  onClose,
}: {
  folder: Folder;
  isOpen: boolean;
  onClose: () => void;
}) {
  const { renameFolder } = useFolders();
  const [name, setName] = useState(folder.name);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setName(folder.name);
    }
  }, [isOpen, folder.name]);

  async function handleSave(event: FormEvent) {
    event.preventDefault();
    const trimmed = name.trim();
    if (!trimmed || isSubmitting) return;
    setIsSubmitting(true);
    try {
      await renameFolder(folder.id, trimmed);
      onClose();
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSave}>
        <h2 className="text-lg font-bold text-[var(--text)]">폴더 이름 수정</h2>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="폴더 이름"
          autoFocus
          className="input-field mt-4"
        />
        <div className="mt-5 flex justify-end gap-2">
          <button type="button" onClick={onClose} className="btn-secondary">
            취소
          </button>
          <button type="submit" disabled={isSubmitting} className="btn-primary">
            {isSubmitting ? "저장 중..." : "저장"}
          </button>
        </div>
      </form>
    </Modal>
  );
}
