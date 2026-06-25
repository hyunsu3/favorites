"use client";

import { useState } from "react";
import NewFolderModal from "@/components/NewFolderModal";

export default function NewFolderButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setIsOpen(true)} className="btn-secondary-sm">
        + 새 폴더
      </button>
      <NewFolderModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
