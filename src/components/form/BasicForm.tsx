import { createSignal } from "solid-js";
import Button from "~/components/common/Button";
import FormSection from "~/components/form/common/FormSection";
import Label from "~/components/form/common/Label";
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

  return (
    <FormSection title={"Basics"} section={"basics"}>
      <form id="basics" name="basics" onInput={handleInput}>
        <Label for="name">
          Name
          <input
            autocomplete="name"
            placeholder={ph.basics.name}
            id="name"
            name="name"
            type="text"
            value={resume?.basics?.name ? resume.basics.name : ""}
          />
        </Label>
        <Label for="label">
          Label
          <input
            placeholder={ph.basics.label}
            id="label"
            name="Label"
            type="text"
            value={resume?.basics?.label ? resume.basics.label : ""}
          />
        </Label>
        <Label for="email">
          Email
          <input
            autocomplete="email"
            placeholder={ph.basics.email}
            id="email"
            name="email"
            type="email"
            value={resume?.basics?.email ? resume.basics.email : ""}
          />
        </Label>
        <Label for="phone">
          Phone
          <input
            autocomplete="tel"
            placeholder={ph.basics.phone}
            id="phone"
            name="phone"
            type="tel"
            value={resume?.basics?.phone ? resume.basics.phone : ""}
          />
        </Label>
        <Label for="url">
          Website
          <input
            autocomplete="url"
            placeholder={ph.basics.url}
            id="url"
            name="url"
            type="url"
            value={resume?.basics?.url ? resume.basics.url : ""}
          />
        </Label>
        <Label for="city">
          City
          <input
            placeholder={ph.basics.city}
            id="city"
            name="city"
            type="text"
            value={resume?.basics?.city ? resume.basics.city : ""}
          />
        </Label>
        <Label for="region">
          Country
          <input
            autocomplete="county"
            placeholder={ph.basics.region}
            id="region"
            name="region"
            type="text"
            value={resume?.basics?.region ? resume.basics.region : ""}
          />
        </Label>
        <Label for="summary">
          Summary
          <textarea
            placeholder={ph.basics.summary}
            id="summary"
            name="summary"
            value={resume?.basics?.summary ? resume.basics.summary : ""}
          />
        </Label>
      </form>
      <form class="self-center" onChange={handleImageUpload}>
        <Button type="button">
          <Label for="image">
            <input
              id="image"
              name="image"
              type="file"
              accept="image/*"
              class="hidden"
            />
            <CameraIcon size={40} />
            <p>Upload profile picture</p>
          </Label>
        </Button>
      </form>
    </FormSection>
  );
}
