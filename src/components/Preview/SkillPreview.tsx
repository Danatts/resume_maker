import { For, Show } from "solid-js";
import Pill from "~/components/Preview/common/Pill";
import Section from "~/components/Preview/common/PreviewSection";
import { resume } from "~/store/resumeStore";

export default function SkillPreview() {
  return (
    <Show when={resume.skills?.view}>
      <Section title={resume.skills?.legend}>
        <ul class="flex flex-wrap gap-2 justify-stretch">
          <For each={resume.skills?.data}>
            {(s) => (
              <li>
                <Pill>{`${s.name}${s.level ? ` - ${s.level}` : ""}`}</Pill>
              </li>
            )}
          </For>
        </ul>
      </Section>
    </Show>
  );
}
