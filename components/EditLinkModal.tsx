"use client";

import { useEffect, useState, type FormEvent } from "react";
import Modal from "@/components/Modal";
import FolderSelect from "@/components/FolderSelect";
import { useLinks } from "@/app/_lib/links-context";
import type { BookmarkLink } from "@/app/_lib/mock-data";

export default function EditLinkModal({
  link,
  isOpen,
  onClose,
}: {
  link: BookmarkLink;
  isOpen: boolean;
  onClose: () => void;
}) {
  const { updateLink } = useLinks();
  const [folderId, setFolderId] = useState(link.folderId);
  const [title, setTitle] = useState(link.title);
  const [description, setDescription] = useState(link.description ?? "");

  useEffect(() => {
    if (isOpen) {
      setFolderId(link.folderId);
      setTitle(link.title);
      setDescription(link.description ?? "");
    }
  }, [isOpen, link]);

  function handleSave(event: FormEvent) {
    event.preventDefault();
    const trimmedTitle = title.trim();
    if (!trimmedTitle || !folderId) return;
    updateLink(link.id, {
      folderId,
      title: trimmedTitle,
      description: description.trim() || undefined,
    });
    onClose();
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSave} className="flex flex-col gap-4">
        <h2 className="text-lg font-bold text-[var(--text)]">링크 수정</h2>
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-[var(--text)]">폴더</label>
          <FolderSelect value={folderId} onChange={setFolderId} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-[var(--text)]">제목</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="제목"
            autoFocus
            className="input-field"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-[var(--text)]">설명</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="설명 (선택)"
            rows={3}
            className="input-field resize-none"
          />
        </div>
        <div className="flex justify-end gap-2">
          <button type="button" onClick={onClose} className="btn-secondary">
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
