import { MetaProvider, Title } from "@solidjs/meta";
import FormPanel from "~/components/FormPanel";
import Toolbar from "~/components/Toolbar";
import PreviewPanel from "~/components/PreviewPanel";
import "~/styles/index.css";

export default function App() {
  return (
    <MetaProvider>
      <Title>Resume Maker</Title>
      <main class="p-2">
        <section class="grid gap-4 lg:grid-cols-2">
          <FormPanel />
          <PreviewPanel />
        </section>
        <Toolbar />
      </main>
    </MetaProvider>
  );
}
