import AppShell from "@/components/AppShell";
import LinkGrid from "@/components/LinkGrid";
import { links } from "@/app/_lib/mock-data";

export default function Home() {
  return (
    <AppShell>
      <LinkGrid links={links} />
    </AppShell>
  );
}
