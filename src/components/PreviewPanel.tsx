import Basics from "~/components/preview/BasicPreview";
import Education from "~/components/preview/EducationPreview";
import Language from "~/components/preview/LanguagePreview";
import Skill from "~/components/preview/SkillPreview";
import Work from "~/components/preview/WorkPreview";
import { view } from "~/store/viewStore";
import "~/styles/print.css";

export default function Preview() {
  return (
    <div class="at_print">
      <Basics show={view.basics} />
      <Work show={view.work} />
      <Education show={view.education} />
      <Skill show={view.skills} />
      <Language show={view.languages} />
    </div>
  );
}
