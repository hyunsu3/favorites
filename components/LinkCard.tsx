"use client";

import { useState } from "react";
import type { BookmarkLink, Folder } from "@/app/_lib/mock-data";
import FolderBadge from "@/components/FolderBadge";
import DeleteLinkModal from "@/components/DeleteLinkModal";
import EditLinkModal from "@/components/EditLinkModal";

export default function LinkCard({
  link,
  folder,
}: {
  link: BookmarkLink;
  folder?: Folder;
}) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  function handleDeleteClick(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    setIsDeleteModalOpen(true);
  }

  function handleEditClick(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    setIsEditModalOpen(true);
  }

  return (
    <>
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex flex-col gap-2 rounded-lg border border-black/[.08] p-4 transition-colors hover:bg-black/[.04]"
      >
        <div className="absolute right-2 top-2 flex gap-1 opacity-0 transition-opacity group-hover:opacity-100">
          <button
            type="button"
            onClick={handleEditClick}
            className="rounded-md p-1 text-zinc-400 transition-colors hover:bg-black/[.08] hover:text-zinc-700"
            aria-label="링크 수정"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
            </svg>
          </button>
          <button
            type="button"
            onClick={handleDeleteClick}
            className="rounded-md p-1 text-zinc-400 transition-colors hover:bg-black/[.08] hover:text-red-500"
            aria-label="링크 삭제"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="3 6 5 6 21 6" />
              <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
              <path d="M10 11v6" />
              <path d="M14 11v6" />
              <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
            </svg>
          </button>
        </div>
        {link.thumbnail && (
          <img
            src={link.thumbnail}
            alt=""
            className="aspect-video w-full rounded-md object-cover"
          />
        )}
        {folder && <FolderBadge folder={folder} />}
        {link.siteName && (
          <span className="truncate text-xs font-medium text-zinc-400">
            {link.siteName}
          </span>
        )}
        <span className="truncate text-sm font-medium text-black">
          {link.title}
        </span>
        {link.description && (
          <span className="line-clamp-2 text-xs text-zinc-500">
            {link.description}
          </span>
        )}
        <span className="truncate text-xs text-zinc-500">{link.url}</span>
      </a>
      <DeleteLinkModal
        link={link}
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
      />
      <EditLinkModal
        link={link}
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
      />
    </>
  );
}
