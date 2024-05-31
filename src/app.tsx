import { MetaProvider, Title } from "@solidjs/meta";
import FormPanel from "~/components/FormPanel";
import Toolbar from "~/components/Toolbar";
import "~/styles/index.css";
import PreviewPanel from "~/components/PreviewPanel";

export default function App() {
  return (
    <MetaProvider>
      <Title>Resume Maker</Title>
      <main>
        <Toolbar />
        <FormPanel />
        <PreviewPanel />
      </main>
    </MetaProvider>
  );
}
