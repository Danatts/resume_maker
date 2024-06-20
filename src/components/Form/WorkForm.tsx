import { createStore } from "solid-js/store";
import Label from "~/components/Form/common/Label";
import ph from "~/components/Form/placeholder";
import { resume, setResume } from "~/store/resumeStore";
import type { FormProps, Work } from "~/types";
import { getTodayDate } from "~/utils/date";

export default function WorkForm(props: FormProps) {
  const [data, setData] = createStore<Work>({});

  function handleInput(e: Event) {
    e.preventDefault();
    const { name, value } = e.target as HTMLInputElement;
    setData(name as keyof Work, value);
    setResume("work", "data", props.key, data);
  }

  return (
    <fieldset onInput={handleInput}>
      <Label for={`position${props.key}`}>
        Position
        <input
          id={`position${props.key}`}
          name="position"
          type="text"
          placeholder={ph.work?.data ? ph.work?.data[0].position : ""}
          value={
            !resume.work?.data
              ? ""
              : resume?.work?.data[props.key]?.position
                ? resume.work.data[props.key].position
                : ""
          }
        />
      </Label>
      <Label for={`institution${props.key}`}>
        Company
        <input
          autocomplete="institution"
          id={`institution${props.key}`}
          name="institution"
          type="text"
          placeholder={ph.work?.data ? ph.work?.data[0].institution : ""}
          value={
            !resume.work?.data
              ? ""
              : resume?.work.data[props.key]?.institution
                ? resume.work.data[props.key].institution
                : ""
          }
        />
      </Label>
      <Label for={`startDate${props.key}`}>
        Starting date
        <input
          id={`startDate${props.key}`}
          name="startDate"
          type="date"
          max={getTodayDate()}
          value={
            !resume.work?.data
              ? ""
              : resume?.work.data[props.key]?.startDate
                ? resume.work.data[props.key].startDate
                : undefined
          }
        />
      </Label>
      <Label for={`endDate${props.key}`}>
        Ending date
        <input
          id={`endDate${props.key}`}
          name="endDate"
          type="date"
          max={getTodayDate()}
          value={
            !resume.work?.data
              ? ""
              : resume?.work.data[props.key]?.endDate
                ? resume.work.data[props.key].endDate
                : undefined
          }
        />
      </Label>
      <Label for={`summary${props.key}`}>
        Summary
        <textarea
          id={`summary${props.key}`}
          name="summary"
          placeholder={ph.work?.data ? ph.work?.data[0].summary : ""}
          value={
            !resume.work?.data
              ? ""
              : resume?.work.data[props.key]?.summary
                ? resume.work.data[props.key].summary
                : ""
          }
        />
      </Label>
    </fieldset>
  );
}
