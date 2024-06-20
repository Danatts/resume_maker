import { type JSXElement, Show, createSignal } from "solid-js";
import CollapsedIcon from "~/icons/CollapsedIcon";
import ExpandedIcon from "~/icons/ExpandedIcon";
import HideIcon from "~/icons/HideIcon";
import ShowIcon from "~/icons/ShowIcon";
import { resume, setResume } from "~/store/resumeStore";

interface Props {
  section: keyof typeof resume;
  children: JSXElement;
}

export default function FormSection(props: Props) {
  const [toggle] = createSignal<boolean>(true);

  function handleView() {
    setResume(props.section, "view", (view) => !view);
  }

  function handleTitle(e: Event) {
    e.preventDefault();
    const { value } = e.target as HTMLInputElement;
    setResume(props.section, "legend", value);
  }

  return (
    <section class="border p-2 rounded">
      <header class="flex justify-between p-2">
        <div>
          <div class="flex gap-1 items-center w-full">
            <Show when={!toggle()} fallback={<ExpandedIcon size={25} />}>
              <CollapsedIcon size={25} />
            </Show>
            <input
              class="text-xl font-bold"
              value={resume[props.section]?.legend}
              onInput={handleTitle}
            />
          </div>
        </div>
        <button type="button" onClick={handleView}>
          <Show
            when={resume[props.section]?.view}
            fallback={<HideIcon size={25} />}
          >
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
