import Basics from "~/components/Preview/BasicPreview";
import Education from "~/components/Preview/EducationPreview";
import Language from "~/components/Preview/LanguagePreview";
import Skill from "~/components/Preview/SkillPreview";
import Work from "~/components/Preview/WorkPreview";

export default function Preview() {
  return (
    <div class="bg-gray-200 h-fit w-fit rounded justify-self-center">
      <div class="h-[21cm] w-[14.8cm] border border-black shadow-gray-500 shadow-md overflow-y-auto scale-90 bg-white font-sans p-10">
        <div id="preview">
          <Basics />
          <Work />
          <Education />
          <Skill />
          <Language />
        </div>
      </div>
    </div>
  );
}
