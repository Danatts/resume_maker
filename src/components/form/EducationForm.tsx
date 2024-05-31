import { createSignal } from "solid-js";
import ph from "~/resources/resumePlaceholder";
import { resume, setResume } from "~/store/resumeStore";
import type { Education, FormProps } from "~/types";
import { getTodayDate } from "~/utils/date";

export default function EducationForm(props: FormProps) {
  const [data, setData] = createSignal<Education>();

  function handleInput(e: Event) {
    e.preventDefault();
    const { name, value } = e.target as HTMLInputElement;
    setData({ ...data(), [name]: value });
    setResume("education", props.key, data());
  }

  return (
    <fieldset onInput={handleInput}>
      <label for={`area${props.key}`}>
        Area
        <input
          autocomplete="name"
          id={`area${props.key}`}
          name="area"
          type="text"
          placeholder={ph.education[0].area}
          value={
            resume?.education[props.key]?.area
              ? resume.education[props.key].area
              : null
          }
        />
      </label>
      <label for={`institution${props.key}`}>
        Institution
        <input
          id={`institution${props.key}`}
          name="institution"
          type="text"
          placeholder={ph.education[0].institution}
          value={
            resume?.education[props.key]?.institution
              ? resume.education[props.key].institution
              : null
          }
        />
      </label>
      <label for={`url${props.key}`}>
        Url
        <input
          id={`url${props.key}`}
          name="url"
          type="url"
          placeholder={ph.education[0].url}
          value={
            resume?.education[props.key]?.url
              ? resume.education[props.key].url
              : null
          }
        />
      </label>
      <label for={`startDate${props.key}`}>
        Starting date
        <input
          id={`startDate${props.key}`}
          name="startDate"
          type="date"
          value={
            resume?.education[props.key]?.startDate
              ? resume.education[props.key].startDate
              : null
          }
        />
      </label>
      <label for={`endDate${props.key}`}>
        Ending date
        <input
          id={`endDate${props.key}`}
          name="endDate"
          type="date"
          max={getTodayDate()}
          value={
            resume?.education[props.key]?.endDate
              ? resume.education[props.key].endDate
              : null
          }
        />
      </label>
      {/*
			<label for="studyType">
				Type
				<input
					id="studyType"
					name="studyType"
					type="text"
					placeholder={education[0].studyType}
				/>
			</label>
			<label for="score">
				Score
				<input
					id="score"
					name="score"
					type="text"
					placeholder={education[0].score}
				/>
			</label>
			<label for="courses">
				Courses
				<input
					id="courses"
					name="courses"
					type="text"
					placeholder={education[0].courses[0]}
				/>
			</label>
      */}
    </fieldset>
  );
}
