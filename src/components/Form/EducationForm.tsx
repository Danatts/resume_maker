import { createStore } from "solid-js/store";
import Label from "~/components/Form/common/Label";
import ph from "~/components/Form/placeholder";
import { resume, setResume } from "~/store/resumeStore";
import type { Education, FormProps } from "~/types";
import { getTodayDate } from "~/utils/date";

export default function EducationForm(props: FormProps) {
  const [data, setData] = createStore<Education>({});

  function handleInput(e: Event) {
    e.preventDefault();
    const { name, value } = e.target as HTMLInputElement;
    setData(name as keyof Education, value);
    setResume("education", "data", props.key, data);
  }

  return (
    <fieldset onInput={handleInput}>
      <Label for={`area${props.key}`}>
        Area
        <input
          autocomplete="name"
          id={`area${props.key}`}
          name="area"
          type="text"
          placeholder={ph.education?.data ? ph.education?.data[0].area : ""}
          value={
            !resume.education?.data
              ? ""
              : resume?.education.data[props.key]?.area
                ? resume.education.data[props.key].area
                : ""
          }
        />
      </Label>
      <Label for={`institution${props.key}`}>
        Institution
        <input
          id={`institution${props.key}`}
          name="institution"
          type="text"
          placeholder={
            ph.education?.data ? ph.education?.data[0].institution : ""
          }
          value={
            !resume.education?.data
              ? ""
              : resume?.education.data[props.key]?.institution
                ? resume.education.data[props.key].institution
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
            !resume.education?.data
              ? ""
              : resume?.education.data[props.key]?.startDate
                ? resume.education.data[props.key].startDate
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
            !resume.education?.data
              ? ""
              : resume?.education.data[props.key]?.endDate
                ? resume.education.data[props.key].endDate
                : undefined
          }
        />
      </Label>
    </fieldset>
  );
}
