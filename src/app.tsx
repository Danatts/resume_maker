import { MetaProvider, Title } from "@solidjs/meta";
import Form from "~/components/Form";
import Toolbar from "~/components/Toolbar";
import Preview from "./components/Preview";
import "~/styles/index.css";

export default function App() {
  return (
    <MetaProvider>
      <Title>Resume Maker</Title>
      <main class="p-2">
        <section class="grid gap-4 lg:grid-cols-2">
          <Form />
          <Preview />
        </section>
        <Toolbar />
      </main>
    </MetaProvider>
  );
}
