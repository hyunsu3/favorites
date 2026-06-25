import FolderPageContent from "@/components/FolderPageContent";

export default async function FolderPage({
  params,
}: {
  params: Promise<{ folderId: string }>;
}) {
  const { folderId } = await params;

  return <FolderPageContent folderId={folderId} />;
}
