import Basic from "~/components/form/BasicForm";
import List from "~/components/form/common/ListCards";

export default function FormPanel() {
  return (
    <div class="flex flex-col gap-2 print:hidden">
      <Basic />
      <List
        componentName={"WorkForm"}
        legend={"Work Experience"}
        formID={"work"}
      />
      <List
        componentName={"EducationForm"}
        legend={"Education"}
        formID={"education"}
      />
      <List componentName={"SkillForm"} legend={"Skills"} formID={"skills"} />
      <List
        componentName={"LanguageForm"}
        legend={"Languages"}
        formID={"languages"}
      />
    </div>
  );
}
