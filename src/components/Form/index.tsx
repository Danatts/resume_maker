import Basic from "~/components/Form/BasicForm";
import List from "~/components/Form/common/ListCards";

export default function FormPanel() {
  return (
    <div class="flex flex-col gap-2 max-h-dvh overflow-y-auto">
      <Basic />
      <List section={"work"} />
      <List section={"education"} />
      <List section={"skills"} />
      <List section={"languages"} />
    </div>
  );
}
