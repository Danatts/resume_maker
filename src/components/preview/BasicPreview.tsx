import Contact from "~/components/preview/common/Contact";
import Section from "~/components/preview/common/PreviewSection";
import Text from "~/components/preview/common/TextStyle";
import { resume } from "~/store/resumeStore";
import { Show } from "solid-js";

export default function BasicPreview(props: { show: boolean }) {
  return (
    <Show when={props.show}>
      <Section>
        <div class="flex flex-row gap-2 justify-between items-center">
          <div class="flex flex-col gap-2">
            <Show when={resume?.basics?.name}>
              <h1 class="font-bold text-2xl text-left">
                {resume?.basics?.name}
              </h1>
            </Show>
            <Show when={resume.basics?.label}>
              <h2 class="font-medium text-base text-left text-neutral-500">
                {resume.basics?.label}
              </h2>
            </Show>
            <Show when={resume.basics?.email}>
              <Contact network={"Mail"}>{resume.basics?.email}</Contact>
            </Show>
            <Show when={resume.basics?.phone}>
              <Contact network={"Phone"}>{resume.basics?.phone}</Contact>
            </Show>
            <Show when={resume.basics?.url}>
              <Contact network={"Globe"} url={resume.basics?.url}>
                <p>Website</p>
              </Contact>
            </Show>
            <Show when={resume.basics?.city || resume.basics?.region}>
              <Contact network={"Location"}>
                <Show when={resume.basics?.city}>
                  <span>{resume.basics?.city}</span>
                </Show>
                <Show when={resume.basics?.city && resume.basics?.region}>
                  <span>-</span>
                </Show>
                <Show when={resume.basics?.region}>
                  <span>{resume.basics?.region}</span>
                </Show>
              </Contact>
            </Show>
          </div>
          <figure class="w-28">
            <Show when={resume.basics?.image}>
              <img
                class="rounded-md"
                alt={"profile"}
                src={resume?.basics?.image}
              />
            </Show>
          </figure>
        </div>
        <Text>{resume.basics?.summary}</Text>
      </Section>
    </Show>
  );
}
