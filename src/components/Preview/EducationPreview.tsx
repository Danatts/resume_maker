import { For, Show } from "solid-js";
import Card from "~/components/Preview/common/Card";
import Section from "~/components/Preview/common/PreviewSection";
import { resume } from "~/store/resumeStore";

export default function EducationPreview() {
  return (
    <Show when={resume.education?.view}>
      <Section title={resume.education?.legend}>
        <ul class="flex flex-col gap-4">
          <For each={resume.education?.data}>
            {(e) => (
              <li>
                <Card
                  title={e.area}
                  subtitle={e.institution}
                  start={e.startDate}
                  end={e.endDate}
                />
              </li>
            )}
          </For>
        </ul>
      </Section>
    </Show>
  );
}
