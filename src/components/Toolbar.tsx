import Button from "~/components/common/Button";
import ImportIcon from "~/icons/ImportIcon";
import PrintIcon from "~/icons/PrintIcon";
import SaveIcon from "~/icons/SaveIcon";
import { resume, setResume } from "~/store/resumeStore";

export default function Toolbar() {
  const ICON_SIZE = 30;

  function handlePrint() {
    const content = document.getElementById("preview")?.innerHTML;
    if (!content) return alert("print error: cannot get preview component");
    const a = window.open('', '');
    a?.document.write('<html>');
    a?.document.write(content);
    a?.document.write('</body></html>');
    a?.print();
  }

  function handleSave() {
    window.localStorage.setItem("resume", btoa(JSON.stringify(resume)));
    alert("Data saved");
  }

  function handleImport() {
    const saved = window.localStorage.getItem("resume");
    if (!saved) return alert("Could not load any data");
    setResume(JSON.parse(atob(saved)));
    setResume("basics", "image", undefined);
  }

  return (
    <ul class="flex flex-row gap-4 px-2 py-1 border rounded-md fixed bottom-1 left-1/2 -translate-x-1/2 bg-white">
      <li>
        <Button type="button" click={handleSave}>
          <SaveIcon size={ICON_SIZE} />
        </Button>
      </li>
      <li>
        <Button type="button" click={handleImport}>
          <ImportIcon size={ICON_SIZE} />
        </Button>
      </li>
      <li>
        <Button type="button" click={handlePrint}>
          <PrintIcon size={ICON_SIZE} />
        </Button>
      </li>
    </ul>
  );
}
