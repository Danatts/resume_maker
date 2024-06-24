import { type JSXElement, Show, createSignal } from "solid-js";
import { Dynamic } from "solid-js/web";
import CollapsedIcon from "~/icons/CollapseIcon";
import ExpandedIcon from "~/icons/ExpandIcon";
import EducationIcon from "~/icons/EducationIcon";
import HideIcon from "~/icons/HideIcon";
import ShowIcon from "~/icons/ShowIcon";
import BasicIcon from "~/icons/BasicIcon";
import { resume, setResume } from "~/store/resumeStore";
import WorkIcon from "~/icons/WorkIcon";
import LanguageIcon from "~/icons/LanguageIcon";
import SkillIcon from "~/icons/SkillIcon";

interface Props {
  section: keyof typeof resume;
  children: JSXElement;
}

const ICON = {
  basics: BasicIcon,
  work: WorkIcon,
  education: EducationIcon,
  skills: SkillIcon,
  languages: LanguageIcon,
}

export default function FormSection(props: Props) {
  const ICON_SIZE = 25;
  const [toggle, setToggle] = createSignal<boolean>(true);

  function handleView() {
    setResume(props.section, "view", (view) => !view);
  }

  function toggleContent() {
    setToggle(!toggle());
  }

  function handleTitle(e: Event) {
    e.preventDefault();
    const { value } = e.target as HTMLInputElement;
    setResume(props.section, "legend", value);
  }

  return (
    <section class="border p-2 rounded">
      <header class="flex justify-between p-2">
        <div class="flex gap-1 items-center w-full">
          <Dynamic component={ICON[props.section]} size={ICON_SIZE} />
          <input
            class="text-xl font-bold"
            value={resume[props.section]?.legend}
            onInput={handleTitle}
          />
        </div>
        <div class="flex gap-1 items-center">
          <button type="button" onClick={toggleContent}>
            <Show when={!toggle()} fallback={<CollapsedIcon size={ICON_SIZE} />}>
              <ExpandedIcon size={25} />
            </Show>
          </button>
          <button type="button" onClick={handleView}>
            <Show
              when={resume[props.section]?.view}
              fallback={<HideIcon size={25} />}
            >
              <ShowIcon size={25} />
            </Show>
          </button>
        </div>
      </header>
      <div class="flex flex-col gap-4">
        <Show when={toggle()}>{props.children}</Show>
      </div>
    </section>
  );
}
