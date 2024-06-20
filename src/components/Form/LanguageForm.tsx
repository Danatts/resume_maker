import { createStore } from "solid-js/store";
import Label from "~/components/Form/common/Label";
import ph from "~/components/Form/placeholder";
import { resume, setResume } from "~/store/resumeStore";
import type { FormProps, Language } from "~/types";

export default function LanguageForm(props: FormProps) {
  const [data, setData] = createStore<Language>({});

  function handleInput(e: Event) {
    e.preventDefault();
    const { name, value } = e.target as HTMLInputElement;
    setData(name as keyof Language, value);
    setResume("languages", "data", props.key, data);
  }

  return (
    <fieldset onInput={handleInput}>
      <Label for={`language${props.key}`}>
        Language
        <input
          placeholder={ph.languages?.data ? ph.languages?.data[0].language : ""}
          id={`language${props.key}`}
          name="language"
          type="text"
          value={
            !resume.languages?.data
              ? ""
              : resume?.languages.data[props.key]?.language
                ? resume.languages.data[props.key].language
                : ""
          }
        />
      </Label>
      <Label for={`fluency${props.key}`}>
        Fluency
        <input
          placeholder={ph.languages?.data ? ph.languages?.data[0].fluency : ""}
          id={`fluency${props.key}`}
          name="fluency"
          type="text"
          value={
            !resume.languages?.data
              ? ""
              : resume?.languages.data[props.key]?.fluency
                ? resume.languages.data[props.key].fluency
                : ""
          }
        />
      </Label>
    </fieldset>
  );
}
