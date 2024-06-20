import { Show } from "solid-js";
import Contact from "~/components/Preview/common/Contact";
import Section from "~/components/Preview/common/PreviewSection";
import Text from "~/components/Preview/common/TextStyle";
import { resume } from "~/store/resumeStore";

export default function BasicPreview() {
  return (
    <Show when={resume.basics?.view}>
      <Section>
        <div class="flex flex-row gap-2 justify-between items-center">
          <div class="flex flex-col gap-2">
            <Show when={resume?.basics?.data?.name}>
              <h1 class="font-bold text-2xl text-left">
                {resume?.basics?.data?.name}
              </h1>
            </Show>
            <Show when={resume.basics?.data?.label}>
              <h2 class="font-medium text-base text-left text-neutral-500">
                {resume.basics?.data?.label}
              </h2>
            </Show>
            <Show when={resume.basics?.data?.email}>
              <Contact icon={"Mail"}>{resume.basics?.data?.email}</Contact>
            </Show>
            <Show when={resume.basics?.data?.phone}>
              <Contact icon={"Phone"}>{resume.basics?.data?.phone}</Contact>
            </Show>
            <Show when={resume.basics?.data?.url}>
              <Contact icon={"Website"} url={resume.basics?.data?.url}>
                <p>Website</p>
              </Contact>
            </Show>
            <Show when={resume.basics?.data?.city || resume.basics?.data?.country}>
              <Contact icon={"Location"}>
                <Show when={resume.basics?.data?.city}>
                  <span>{resume.basics?.data?.city}</span>
                </Show>
                <Show when={resume.basics?.data?.city && resume.basics?.data?.country}>
                  <span>-</span>
                </Show>
                <Show when={resume.basics?.data?.country}>
                  <span>{resume.basics?.data?.country}</span>
                </Show>
              </Contact>
            </Show>
          </div>
          <figure class="w-28">
            <Show when={resume.basics?.data?.image}>
              <img
                class="rounded-md"
                alt={"profile"}
                src={resume?.basics?.data?.image}
              />
            </Show>
          </figure>
        </div>
        <Text>{resume.basics?.data?.summary}</Text>
      </Section>
    </Show>
  );
}
