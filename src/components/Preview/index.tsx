import Basics from "~/components/Preview/BasicPreview";
import Education from "~/components/Preview/EducationPreview";
import Language from "~/components/Preview/LanguagePreview";
import Skill from "~/components/Preview/SkillPreview";
import Work from "~/components/Preview/WorkPreview";

export default function Preview() {
  return (
    <div class="bg-gray-200 w-fit h-fit rounded justify-self-center sticky">
      <div class="h-[21cm] w-[14.8cm] border border-black shadow-gray-500 shadow-md overflow-scroll scale-90 bg-white p-10">
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
