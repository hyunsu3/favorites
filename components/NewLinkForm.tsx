"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import FolderSelect from "@/components/FolderSelect";
import { useLinks } from "@/app/_lib/links-context";

type OgInfo = {
  title?: string;
  description?: string | null;
  thumbnail?: string | null;
  siteName?: string;
};

async function fetchOgInfo(url: string): Promise<OgInfo | null> {
  try {
    const response = await fetch(`/api/og?url=${encodeURIComponent(url)}`);
    if (!response.ok) {
      return null;
    }
    return await response.json();
  } catch {
    return null;
  }
}

export default function NewLinkForm() {
  const router = useRouter();
  const { addLink } = useLinks();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const url = String(formData.get("url") ?? "").trim();
    const folderId = String(formData.get("folder") ?? "");

    if (!url || !folderId) {
      setError("링크와 폴더를 모두 입력해주세요.");
      return;
    }

    setError("");
    setIsSubmitting(true);

    const og = await fetchOgInfo(url);

    addLink({
      url,
      folderId,
      title: og?.title ?? url,
      description: og?.description ?? undefined,
      thumbnail: og?.thumbnail ?? undefined,
      siteName: og?.siteName ?? undefined,
    });

    setIsSubmitting(false);
    router.push("/");
  }

  return (
    <form onSubmit={handleSubmit} className="flex max-w-md flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label htmlFor="url" className="text-sm font-medium text-black">
          링크
        </label>
        <input
          id="url"
          name="url"
          type="url"
          required
          placeholder="https://example.com"
          className="w-full rounded-md border border-black/[.08] bg-transparent px-3 py-2 text-sm text-black placeholder:text-zinc-400 focus:outline-none"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="folder" className="text-sm font-medium text-black">
          폴더
        </label>
        <FolderSelect />
      </div>
      {error && <p className="text-sm text-[var(--error)]">{error}</p>}
      <button type="submit" disabled={isSubmitting} className="btn-primary mt-2">
        {isSubmitting ? "확인 중..." : "확인"}
      </button>
    </form>
  );
}
