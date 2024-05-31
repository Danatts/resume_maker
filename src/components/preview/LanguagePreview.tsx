import Pill from "~/components/preview/common/Pill";
import Section from "~/components/preview/common/PreviewSection";
import { resume } from "~/store/resumeStore";
import { For, Show } from "solid-js";

export default function LanguagePreview(props: { show: boolean }) {
  return (
    <Show when={props.show}>
      <Section title="Languages">
        <ul class="flex flex-wrap gap-2 justify-stretch">
          <For each={resume.languages}>
            {(l) => (
              <li>
                <Pill>{`${l.language}${
                  // biome-ignore lint/style/useTemplate: <explanation>
                  l.fluency ? " - " + l.fluency : ""
                }`}</Pill>
              </li>
            )}
          </For>
        </ul>
      </Section>
    </Show>
  );
}
