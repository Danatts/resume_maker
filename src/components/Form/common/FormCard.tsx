import type { JSXElement } from "solid-js";
import TrashIcon from "~/icons/TrashIcon";

interface Props {
  delete(): void;
  children: JSXElement;
}

export default function FormCard(props: Props) {
  return (
    <div class="border p-3 flex flex-col rounded">
      <button
        class="w-fit self-end"
        type="button"
        onClick={() => props.delete()}
      >
        <TrashIcon size={18} />
      </button>
      {props.children}
    </div>
  );
}
