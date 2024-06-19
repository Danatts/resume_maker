import Basics from "~/components/preview/BasicPreview";
import Education from "~/components/preview/EducationPreview";
import Language from "~/components/preview/LanguagePreview";
import Skill from "~/components/preview/SkillPreview";
import Work from "~/components/preview/WorkPreview";
import { view } from "~/store/viewStore";

export default function Preview() {
  return (
    <div class="min-h-dvh border border-black shadow-black shadow-md scale-90">
      <div id="preview" class="p-10">
        <Basics show={view.basics} />
        <Work show={view.work} />
        <Education show={view.education} />
        <Skill show={view.skills} />
        <Language show={view.languages} />
      </div>
    </div>
  );
}
