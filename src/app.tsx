import { MetaProvider, Title } from "@solidjs/meta";
import Form from "~/components/Form";
import Toolbar from "~/components/Toolbar";
import Preview from "./components/Preview";
import "~/styles/index.css";
import '@fontsource-variable/montserrat';

export default function App() {
  return (
    <MetaProvider>
      <Title>Resume Maker</Title>
      <main class="max-h-dvh">
        <section class="grid grid-cols-2 max-w-[1300px] max-h-[50vh] py-2 mx-auto">
          <Form />
          <Preview />
        </section>
        <Toolbar />
      </main>
    </MetaProvider>
  );
}
