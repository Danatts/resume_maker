import Button from "~/components/common/Button";
import FormSection from "~/components/Form/common/FormSection";
import Label from "~/components/Form/common/Label";
import CameraIcon from "~/icons/CameraIcon";
import ph from "~/components/Form/placeholder";
import { resume, setResume } from "~/store/resumeStore";
import type { Basics } from "~/types";
import { createStore } from "solid-js/store";

export default function BasicsForm() {
  const [data, setData] = createStore<Basics>();

  function handleInput(e: Event) {
    e.preventDefault();
    const { name, value } = e.target as HTMLInputElement;
    setData(name as keyof Basics, value);
    setResume("basics", "data", data);
  }

  function handleImageUpload(e: Event) {
    e.preventDefault();
    const files = (e.target as HTMLInputElement).files;
    if (!files) return;
    setResume("basics", "data", "image", URL.createObjectURL(files[0]));
  }

  return (
    <FormSection section={"basics"}>
      <form id="basics" name="basics" onInput={handleInput}>
        <Label for="name">
          Name
          <input
            autocomplete="name"
            placeholder={ph.basics?.data?.name}
            id="name"
            name="name"
            type="text"
            value={resume?.basics?.data?.name ? resume.basics.data.name : ""}
          />
        </Label>
        <Label for="label">
          Label
          <input
            placeholder={ph.basics?.data?.label}
            id="label"
            name="label"
            type="text"
            value={resume?.basics?.data?.label ? resume.basics.data.label : ""}
          />
        </Label>
        <Label for="email">
          Email
          <input
            autocomplete="email"
            placeholder={ph.basics?.data?.email}
            id="email"
            name="email"
            type="email"
            value={resume?.basics?.data?.email ? resume.basics.data.email : ""}
          />
        </Label>
        <Label for="phone">
          Phone
          <input
            autocomplete="tel"
            placeholder={ph.basics?.data?.phone}
            id="phone"
            name="phone"
            type="tel"
            value={resume?.basics?.data?.phone ? resume.basics.data.phone : ""}
          />
        </Label>
        <Label for="url">
          Website
          <input
            autocomplete="url"
            placeholder={ph.basics?.data?.url}
            id="url"
            name="url"
            type="url"
            value={resume?.basics?.data?.url ? resume.basics.data.url : ""}
          />
        </Label>
        <Label for="city">
          City
          <input
            placeholder={ph.basics?.data?.city}
            id="city"
            name="city"
            type="text"
            value={resume?.basics?.data?.city ? resume.basics.data.city : ""}
          />
        </Label>
        <Label for="country">
          Country
          <input
            autocomplete="country"
            placeholder={ph.basics?.data?.country}
            id="country"
            name="country"
            type="text"
            value={resume?.basics?.data?.country ? resume.basics.data.country : ""}
          />
        </Label>
        <Label for="summary">
          Summary
          <textarea
            placeholder={ph.basics?.data?.summary}
            id="summary"
            name="summary"
            rows={5}
            value={resume?.basics?.data?.summary ? resume.basics.data.summary : ""}
          />
        </Label>
      </form>
      <form onChange={handleImageUpload}>
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
