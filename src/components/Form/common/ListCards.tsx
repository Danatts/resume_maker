import { For, createSignal } from "solid-js";
import { Dynamic } from "solid-js/web";
import EducationForm from "~/components/Form/EducationForm";
import LanguageForm from "~/components/Form/LanguageForm";
import SkillForm from "~/components/Form/SkillForm";
import WorkForm from "~/components/Form/WorkForm";
import FormCard from "~/components/Form/common/FormCard";
import FormSection from "~/components/Form/common/FormSection";
import Button from "~/components/common/Button";
import { resume, setResume } from "~/store/resumeStore";

interface Props {
  section: keyof typeof resume;
}

const FORM = {
  basics: WorkForm,
  work: WorkForm,
  education: EducationForm,
  skills: SkillForm,
  languages: LanguageForm,
};

export default function ListCards(props: Props) {
  const [list, setList] = createSignal([{}]);

  function addCard() {
    setList([...list(), {}]);
  }

  function removeCard(id: number) {
    setList(list().filter((_, i) => i !== id));
    const copy = resume[props.section]?.data;
    if (!copy) return null;
    // @ts-ignore
    setResume(props.section, "data", [...copy].toSpliced(id, 1));
  }

  return (
    <FormSection section={props.section}>
      <form class="flex flex-col gap-2 pt-4" id={props.section} name={props.section}>
        <For each={list()}>
          {(_, index) => (
            <FormCard delete={() => removeCard(index())}>
              <Dynamic component={FORM[props.section]} key={index()} />
            </FormCard>
          )}
        </For>
        <div class="self-center">
          <Button type="button" click={addCard}>
            <p class="px-2 py-1">+ New</p>
          </Button>
        </div>
      </form>
    </FormSection>
  );
}
