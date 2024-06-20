import { For, Show } from "solid-js";
import Pill from "~/components/Preview/common/Pill";
import Section from "~/components/Preview/common/PreviewSection";
import { resume } from "~/store/resumeStore";

export default function LanguagePreview() {
  return (
    <Show when={resume.languages?.view}>
      <Section title={resume.languages?.legend}>
        <ul class="flex flex-wrap gap-2 justify-stretch">
          <For each={resume.languages?.data}>
            {(l) => (
              <li>
                <Pill>{`${l.language}${l.fluency ? ` - ${l.fluency}` : ""}`}</Pill>
              </li>
            )}
          </For>
        </ul>
      </Section>
    </Show>
  );
}
