"use client";

import { useState } from "react";
import type { BookmarkLink, Folder } from "@/app/_lib/mock-data";
import FolderBadge from "@/components/FolderBadge";
import DeleteLinkModal from "@/components/DeleteLinkModal";

export default function LinkCard({
  link,
  folder,
}: {
  link: BookmarkLink;
  folder?: Folder;
}) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  function handleDeleteClick(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    setIsDeleteModalOpen(true);
  }

  return (
    <>
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex flex-col gap-2 rounded-lg border border-black/[.08] p-4 transition-colors hover:bg-black/[.04]"
      >
        <button
          type="button"
          onClick={handleDeleteClick}
          className="absolute right-2 top-2 rounded-md p-1 text-zinc-400 opacity-0 transition-opacity hover:bg-black/[.08] hover:text-red-500 group-hover:opacity-100"
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
    </>
  );
}
