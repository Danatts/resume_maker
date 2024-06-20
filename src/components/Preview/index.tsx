import Basics from "~/components/Preview/BasicPreview";
import Education from "~/components/Preview/EducationPreview";
import Language from "~/components/Preview/LanguagePreview";
import Skill from "~/components/Preview/SkillPreview";
import Work from "~/components/Preview/WorkPreview";

export default function Preview() {
  return (
    <div class="min-h-dvh border border-black shadow-black shadow-md scale-90">
      <div id="preview" class="p-10">
        <Basics />
        <Work />
        <Education />
        <Skill />
        <Language />
      </div>
    </div>
  );
}
