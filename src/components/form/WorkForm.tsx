import { createSignal } from "solid-js";
import ph from "~/resources/resumePlaceholder";
import { resume, setResume } from "~/store/resumeStore";
import type { FormProps, Work } from "~/types";
import { getTodayDate } from "~/utils/date";
import Label from "~/components/form/common/Label";

export default function WorkForm(props: FormProps) {
  const [data, setData] = createSignal<Work>({});

  function handleInput(e: Event) {
    e.preventDefault();
    const { name, value } = e.target as HTMLInputElement;
    setData({ ...data(), [name]: value });
    setResume("work", props.key, data());
  }

  return (
    <fieldset onInput={handleInput}>
      <Label for={`position${props.key}`}>
        Position
        <input
          id={`position${props.key}`}
          name="position"
          type="text"
          placeholder={ph.work[0].position}
          value={
            !resume.work
              ? ""
              : resume?.work[props.key]?.position
                ? resume.work[props.key].position
                : ""
          }
        />
      </Label>
      <Label for={`name${props.key}`}>
        Company
        <input
          autocomplete="name"
          id={`name${props.key}`}
          name="name"
          type="text"
          placeholder={ph.work[0].name}
          value={
            !resume.work
              ? ""
              : resume?.work[props.key]?.name
                ? resume.work[props.key].name
                : ""
          }
        />
      </Label>
      <Label for={`url${props.key}`}>
        Url
        <input
          id={`url${props.key}`}
          name="url"
          type="url"
          placeholder={ph.work[0].url}
          value={
            !resume.work
              ? ""
              : resume?.work[props.key]?.url
                ? resume.work[props.key].url
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
          value={
            !resume.work
              ? ""
              : resume?.work[props.key]?.startDate
                ? resume.work[props.key].startDate
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
            !resume.work
              ? ""
              : resume?.work[props.key]?.endDate
                ? resume.work[props.key].endDate
                : undefined
          }
        />
      </Label>
      <Label for={`summary${props.key}`}>
        Summary
        <textarea
          id={`summary${props.key}`}
          name="summary"
          placeholder={ph.work[0].summary}
          value={
            !resume.work
              ? ""
              : resume?.work[props.key]?.summary
                ? resume.work[props.key].summary
                : ""
          }
        />
      </Label>
      {/*
			<Label for="highlights">
				Highlights
				<input
					id="highlights"
					name="highlights"
					type="text"
					placeholder={work[0].highlights[0]}
				/>
			</Label>
      */}
    </fieldset>
  );
}
