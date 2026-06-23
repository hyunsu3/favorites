import type { Folder } from "@/app/_lib/mock-data";
import FolderSelect from "@/components/FolderSelect";

export default function NewLinkForm({ folders }: { folders: Folder[] }) {
  return (
    <form className="flex max-w-md flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label
          htmlFor="url"
          className="text-sm font-medium text-black dark:text-zinc-50"
        >
          링크
        </label>
        <input
          id="url"
          name="url"
          type="url"
          placeholder="https://example.com"
          className="w-full rounded-md border border-black/[.08] bg-transparent px-3 py-2 text-sm text-black placeholder:text-zinc-400 focus:outline-none dark:border-white/[.145] dark:text-zinc-50"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="folder"
          className="text-sm font-medium text-black dark:text-zinc-50"
        >
          폴더
        </label>
        <FolderSelect folders={folders} />
      </div>
      <button
        type="submit"
        className="mt-2 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
      >
        저장
      </button>
    </form>
  );
}
