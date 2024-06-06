import { createSignal } from "solid-js";
import Label from "~/components/form/common/Label";
import ph from "~/resources/resumePlaceholder";
import { resume, setResume } from "~/store/resumeStore";
import type { Education, FormProps } from "~/types";
import { getTodayDate } from "~/utils/date";

export default function EducationForm(props: FormProps) {
  const [data, setData] = createSignal<Education>({});

  function handleInput(e: Event) {
    e.preventDefault();
    const { name, value } = e.target as HTMLInputElement;
    setData({ ...data(), [name]: value });
    setResume("education", props.key, data());
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
          placeholder={ph.education[0].area}
          value={
            !resume.education
              ? ""
              : resume?.education[props.key]?.area
                ? resume.education[props.key].area
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
          placeholder={ph.education[0].institution}
          value={
            !resume.education
              ? ""
              : resume?.education[props.key]?.institution
                ? resume.education[props.key].institution
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
          placeholder={ph.education[0].url}
          value={
            !resume.education
              ? ""
              : resume?.education[props.key]?.url
                ? resume.education[props.key].url
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
            !resume.education
              ? ""
              : resume?.education[props.key]?.startDate
                ? resume.education[props.key].startDate
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
            !resume.education
              ? ""
              : resume?.education[props.key]?.endDate
                ? resume.education[props.key].endDate
                : undefined
          }
        />
      </Label>
      {/*
			<Label for="studyType">
				Type
				<input
					id="studyType"
					name="studyType"
					type="text"
					placeholder={education[0].studyType}
				/>
			</Label>
			<Label for="score">
				Score
				<input
					id="score"
					name="score"
					type="text"
					placeholder={education[0].score}
				/>
			</Label>
			<Label for="courses">
				Courses
				<input
					id="courses"
					name="courses"
					type="text"
					placeholder={education[0].courses[0]}
				/>
			</Label>
      */}
    </fieldset>
  );
}
