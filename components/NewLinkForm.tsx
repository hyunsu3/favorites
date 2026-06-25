import FolderSelect from "@/components/FolderSelect";

export default function NewLinkForm() {
  return (
    <form className="flex max-w-md flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label
          htmlFor="url"
          className="text-sm font-medium text-black"
        >
          링크
        </label>
        <input
          id="url"
          name="url"
          type="url"
          placeholder="https://example.com"
          className="w-full rounded-md border border-black/[.08] bg-transparent px-3 py-2 text-sm text-black placeholder:text-zinc-400 focus:outline-none"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="folder"
          className="text-sm font-medium text-black"
        >
          폴더
        </label>
        <FolderSelect />
      </div>
      <button type="submit" className="btn-primary mt-2">
        저장
      </button>
    </form>
  );
}
