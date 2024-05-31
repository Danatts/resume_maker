import { For, createSignal } from "solid-js";
import type { Part } from "solid-js/store";
import { Dynamic } from "solid-js/web";
import Button from "~/components/common/Button";
import EducationForm from "~/components/form/EducationForm";
import LanguageForm from "~/components/form/LanguageForm";
import SkillForm from "~/components/form/SkillForm";
import WorkForm from "~/components/form/WorkForm";
import FormCard from "~/components/form/common/FormCard";
import FormSection from "~/components/form/common/FormSection";
import { resume, setResume } from "~/store/resumeStore";
import type { Resume } from "~/types";

interface Props {
  componentName: string;
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  formID: string | Part<Resume, any>;
  legend: string;
}

const FORM = {
  EducationForm,
  LanguageForm,
  SkillForm,
  WorkForm,
};

export default function ListCards(props: Props) {
  const [list, setList] = createSignal([{}]);

  function addCard() {
    setList([...list(), {}]);
  }

  function removeCard(id: number) {
    setList(list().filter((_, i) => i !== id));
    setResume(props.formID, [...resume[props.formID]].toSpliced(id, 1));
  }

  return (
    <FormSection title={props.legend} section={props.formID}>
      <form id={props.formID} name={props.formID}>
        <For each={list()}>
          {(_, index) => (
            <FormCard key={index()} delete={removeCard}>
              <Dynamic component={FORM[props.componentName]} key={index()} />
            </FormCard>
          )}
        </For>
        <div class="self-center">
          <Button type="button" action={addCard}>
            <p class="px-2 py-1">Add</p>
          </Button>
        </div>
      </form>
    </FormSection>
  );
}
