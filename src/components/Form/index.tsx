import Basic from "~/components/Form/BasicForm";
import List from "~/components/Form/common/ListCards";

export default function FormPanel() {
  return (
    <div class="flex flex-col gap-2">
      <Basic />
      <List
        componentName={"WorkForm"}
        section={"work"}
      />
      <List
        componentName={"EducationForm"}
        section={"education"}
      />
      <List componentName={"SkillForm"} section={"skills"} />
      <List
        componentName={"LanguageForm"}
        section={"languages"}
      />
    </div>
  );
}
