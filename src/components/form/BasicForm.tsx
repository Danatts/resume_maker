import { createSignal } from "solid-js";
import Button from "~/components/common/Button";
import FormSection from "~/components/form/common/FormSection";
import CameraIcon from "~/icons/CameraIcon";
import ph from "~/resources/resumePlaceholder";
import { resume, setResume } from "~/store/resumeStore";
import type { Basics } from "~/types";

export default function BasicsForm() {
  const [data, setData] = createSignal<Basics>();

  function handleInput(e: Event) {
    e.preventDefault();
    const { name, value } = e.target as HTMLInputElement;
    setData({ ...data(), [name]: value });
    setResume("basics", data());
  }

  function handleImageUpload(e: Event) {
    e.preventDefault();
    const files = (e.target as HTMLInputElement).files;
    if (!files) return;
    setResume("basics", "image", URL.createObjectURL(files[0]));
  }

  function handleImageError(e: Event) {
    e.preventDefault();
    setResume("basics", "image", undefined);
  }

  return (
    <FormSection title={"Basics"} section={"basics"}>
      <form id="basics" name="basics" onInput={handleInput}>
        <label for="name">
          Name
          <input
            autocomplete="name"
            placeholder={ph.basics.name}
            id="name"
            name="name"
            type="text"
            value={resume?.basics?.name ? resume.basics.name : ""}
          />
        </label>
        <label for="label">
          Label
          <input
            placeholder={ph.basics.label}
            id="label"
            name="label"
            type="text"
            value={resume?.basics?.label ? resume.basics.label : ""}
          />
        </label>
        <label for="email">
          Email
          <input
            autocomplete="email"
            placeholder={ph.basics.email}
            id="email"
            name="email"
            type="email"
            value={resume?.basics?.email ? resume.basics.email : ""}
          />
        </label>
        <label for="phone">
          Phone
          <input
            autocomplete="tel"
            placeholder={ph.basics.phone}
            id="phone"
            name="phone"
            type="tel"
            value={resume?.basics?.phone ? resume.basics.phone : ""}
          />
        </label>
        <label for="url">
          Website
          <input
            autocomplete="url"
            placeholder={ph.basics.url}
            id="url"
            name="url"
            type="url"
            value={resume?.basics?.url ? resume.basics.url : ""}
          />
        </label>
        <label for="city">
          City
          <input
            placeholder={ph.basics.city}
            id="city"
            name="city"
            type="text"
            value={resume?.basics?.city ? resume.basics.city : ""}
          />
        </label>
        <label for="region">
          Country
          <input
            autocomplete="county"
            placeholder={ph.basics.region}
            id="region"
            name="region"
            type="text"
            value={resume?.basics?.region ? resume.basics.region : ""}
          />
        </label>
        <label for="summary">
          Summary
          <textarea
            placeholder={ph.basics.summary}
            id="summary"
            name="summary"
            value={resume?.basics?.summary ? resume.basics.summary : ""}
          />
        </label>
      </form>
      <form
        class="self-center"
        onChange={handleImageUpload}
        onError={handleImageError}
      >
        <Button type="button">
          <label
            for="image"
            class="p-2 flex flex-col items-center justify-center cursor-pointer"
          >
            <input
              id="image"
              name="image"
              type="file"
              accept="image/*"
              class="hidden"
            />
            <CameraIcon size={40} />
            <p>Upload profile picture</p>
          </label>
        </Button>
      </form>
    </FormSection>
  );
}
