import AppShell from "@/components/AppShell";
import NewLinkForm from "@/components/NewLinkForm";
import { folders } from "@/app/_lib/mock-data";

export default function NewLinkPage() {
  return (
    <AppShell>
      <NewLinkForm folders={folders} />
    </AppShell>
  );
}
