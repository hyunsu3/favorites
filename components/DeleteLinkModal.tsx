"use client";

import Modal from "@/components/Modal";
import { useLinks } from "@/app/_lib/links-context";
import type { BookmarkLink } from "@/app/_lib/mock-data";

export default function DeleteLinkModal({
  link,
  isOpen,
  onClose,
}: {
  link: BookmarkLink;
  isOpen: boolean;
  onClose: () => void;
}) {
  const { deleteLink } = useLinks();

  function handleDelete() {
    deleteLink(link.id);
    onClose();
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-lg font-bold text-[var(--text)]">링크 삭제</h2>
      <p className="mt-2 text-sm text-[var(--text-sub)]">
        &apos;{link.title}&apos; 링크를 삭제하시겠습니까?
      </p>
      <div className="mt-5 flex justify-end gap-2">
        <button type="button" onClick={onClose} className="btn-secondary">
          취소
        </button>
        <button type="button" onClick={handleDelete} className="btn-danger">
          삭제
        </button>
      </div>
    </Modal>
  );
}
