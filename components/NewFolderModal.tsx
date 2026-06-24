"use client";

import { useState, type FormEvent } from "react";
import Modal from "@/components/Modal";
import { useFolders } from "@/app/_lib/folders-context";

export default function NewFolderModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { addFolder } = useFolders();
  const [name, setName] = useState("");

  function handleClose() {
    setName("");
    onClose();
  }

  function handleSave(event: FormEvent) {
    event.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) {
      return;
    }
    addFolder(trimmed);
    handleClose();
  }

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <form onSubmit={handleSave}>
        <h2 className="text-lg font-bold text-[var(--text)]">새 폴더</h2>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="폴더 이름"
          autoFocus
          className="input-field mt-4"
        />
        <div className="mt-5 flex justify-end gap-2">
          <button type="button" onClick={handleClose} className="btn-secondary">
            취소
          </button>
          <button type="submit" className="btn-primary">
            저장
          </button>
        </div>
      </form>
    </Modal>
  );
}
