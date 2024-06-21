import { createStore } from "solid-js/store";
import Label from "~/components/Form/common/Label";
import ph from "~/components/Form/placeholder";
import { resume, setResume } from "~/store/resumeStore";
import type { FormProps, Skill } from "~/types";
import Row from "~/components/Form/common/Row";

export default function SkillForm(props: FormProps) {
  const [data, setData] = createStore<Skill>({});

  function handleInput(e: Event) {
    e.preventDefault();
    const { name, value } = e.target as HTMLInputElement;
    setData(name as keyof Skill, value);
    setResume("skills", "data", props.key, data);
  }

  return (
    <fieldset onInput={handleInput}>
      <Row>
        <Label for={`name${props.key}`}>
          Name
          <input
            autocomplete="name"
            placeholder={ph.skills?.data ? ph.skills?.data[0].name : ""}
            id={`name${props.key}`}
            name="name"
            type="text"
            value={
              !resume.skills?.data
                ? ""
                : resume?.skills.data[props.key]?.name
                  ? resume.skills.data[props.key].name
                  : ""
            }
          />
        </Label>
        <Label for={`level${props.key}`}>
          Level
          <input
            placeholder={ph.skills?.data ? ph.skills?.data[0].level : ""}
            id={`level${props.key}`}
            name="level"
            type="text"
            value={
              !resume.skills?.data
                ? ""
                : resume?.skills.data[props.key]?.level
                  ? resume.skills.data[props.key].level
                  : ""
            }
          />
        </Label>
      </Row>
    </fieldset>
  );
}
