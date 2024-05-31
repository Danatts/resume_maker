import Button from "~/components/common/Button";
import ImportIcon from "~/icons/ImportIcon";
import PrintIcon from "~/icons/PrintIcon";
import SaveIcon from "~/icons/SaveIcon";
import { setResume, resume } from "~/store/resumeStore";

export default function Toolbar() {
  const ICON_SIZE = 30;

  function handlePrint() {
    print();
  }

  function handleSave() {
    window.localStorage.setItem("resume", btoa(JSON.stringify(resume)));
    alert("Data saved");
  }

  function handleImport() {
    const saved = window.localStorage.getItem("resume");
    if (!saved) return alert("Could not load any data");
    setResume(JSON.parse(atob(saved)));
  }

  return (
    <ul class="flex flex-row gap-4 px-2 py-0.5 border rounded-md fixed bottom-1 left-1/2 -translate-x-1/2">
      <li>
        <Button type="button" action={handleSave}>
          <SaveIcon size={ICON_SIZE} />
        </Button>
      </li>
      <li>
        <Button type="button" action={handleImport}>
          <ImportIcon size={ICON_SIZE} />
        </Button>
      </li>
      <li>
        <Button type="button" action={handlePrint}>
          <PrintIcon size={ICON_SIZE} />
        </Button>
      </li>
    </ul>
  );
}
