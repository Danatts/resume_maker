import { MetaProvider, Title } from "@solidjs/meta";
import Form from "~/components/Form";
import Toolbar from "~/components/Toolbar";
import Preview from "./components/Preview";
import "~/styles/index.css";

export default function App() {
  return (
    <MetaProvider>
      <Title>Resume Maker</Title>
      <main>
        <section class="grid grid-cols-2 max-w-[1300px] p-2 mx-auto">
          <Form />
          <Preview />
        </section>
        <Toolbar />
      </main>
    </MetaProvider>
  );
}
