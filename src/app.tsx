import { MetaProvider, Title } from "@solidjs/meta";
import Form from "~/components/Form";
import Toolbar from "~/components/Toolbar";
import Preview from "./components/Preview";
import "~/styles/index.css";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <MetaProvider>
      <Title>Resume Maker</Title>
      <Navbar />
      <main>
        <section class="grid grid-cols-2 max-w-[1300px] py-2 mx-auto">
          <Form />
          <Preview />
        </section>
        <Toolbar />
      </main>
    </MetaProvider>
  );
}
