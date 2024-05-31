import { type JSXElement, Show, createSignal } from "solid-js";
import CollapsedIcon from "~/icons/CollapsedIcon";
import ExpandedIcon from "~/icons/ExpandedIcon";
import HideIcon from "~/icons/HideIcon";
import ShowIcon from "~/icons/ShowIcon";
import { setView, view } from "~/store/viewStore";

interface Props {
  children: JSXElement;
  title: string;
  section: string;
}

export default function FormSection(props: Props) {
  const [toggle, setToggle] = createSignal<boolean>(false);

  function handleToogle() {
    setToggle(!toggle());
  }

  function handleView() {
    setView(props.section, !view[props.section]);
  }

  return (
    <section class="border p-2 rounded">
      <header class="flex justify-between p-2 items-center">
        <div>
          <button
            class="flex gap-1 items-center"
            type="button"
            onClick={handleToogle}
          >
            <Show when={!toggle()} fallback={<ExpandedIcon size={25} />}>
              <CollapsedIcon size={25} />
            </Show>
            <h1 class="text-xl font-bold">{props.title}</h1>
          </button>
        </div>
        <button type="button" onClick={handleView}>
          <Show when={view[props.section]} fallback={<HideIcon size={25} />}>
            <ShowIcon size={25} />
          </Show>
        </button>
      </header>
      <div class="flex flex-col gap-4">
        <Show when={toggle()}>{props.children}</Show>
      </div>
    </section>
  );
}
