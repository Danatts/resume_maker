import Card from "~/components/preview/common/Card";
import Section from "~/components/preview/common/PreviewSection";
import Text from "~/components/preview/common/TextStyle";
import { resume } from "~/store/resumeStore";
import { For, Show } from "solid-js";

export default function WorkPreview(props: { show: boolean }) {
  return (
    <Show when={props.show}>
      <Section title="Experience">
        <ul class="flex flex-col gap-4">
          <For each={resume.work}>
            {(w) => (
              <li>
                <Card
                  title={w.position}
                  subtitle={w.name}
                  subUrl={w.url}
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
