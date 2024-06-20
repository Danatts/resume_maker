import { For, Show } from "solid-js";
import Card from "~/components/Preview/common/Card";
import Section from "~/components/Preview/common/PreviewSection";
import Text from "~/components/Preview/common/TextStyle";
import { resume } from "~/store/resumeStore";

export default function WorkPreview() {
  return (
    <Show when={resume.work?.view}>
      <Section title={resume.work?.legend}>
        <ul class="flex flex-col gap-4">
          <For each={resume.work?.data}>
            {(w) => (
              <li>
                <Card
                  title={w.position}
                  subtitle={w.institution}
                  start={w.startDate}
                  end={w.endDate}
                >
                  <Text>{w.summary}</Text>
                </Card>
              </li>
            )}
          </For>
        </ul>
      </Section>
    </Show>
  );
}
