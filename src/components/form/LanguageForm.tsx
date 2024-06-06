import { createSignal } from "solid-js";
import ph from "~/resources/resumePlaceholder";
import { resume, setResume } from "~/store/resumeStore";
import type { FormProps, Language } from "~/types";

export default function LanguageForm(props: FormProps) {
  const [data, setData] = createSignal<Language>({});

  function handleInput(e: Event) {
    e.preventDefault();
    const { name, value } = e.target as HTMLInputElement;
    setData({ ...data(), [name]: value });
    setResume("languages", props.key, data());
  }

  return (
    <fieldset onInput={handleInput}>
      <label for={`language${props.key}`}>
        Language
        <input
          placeholder={ph.languages[0].language}
          id={`language${props.key}`}
          name="language"
          type="text"
          value={
            !resume.languages
              ? ""
              : resume?.languages[props.key]?.language
                ? resume.languages[props.key].language
                : ""
          }
        />
      </label>
      <label for={`fluency${props.key}`}>
        Fluency
        <input
          placeholder={ph.languages[0].fluency}
          id={`fluency${props.key}`}
          name="fluency"
          type="text"
          value={
            !resume.languages
              ? ""
              : resume?.languages[props.key]?.fluency
                ? resume.languages[props.key].fluency
                : ""
          }
        />
      </label>
    </fieldset>
  );
}
