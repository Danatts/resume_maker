import type { JSXElement } from "solid-js";

interface Props {
  id?: string;
  type: "button" | "submit" | "reset" | undefined;
  children: JSXElement;
  click?: () => void;
}

export default function Button(props: Props) {
  return (
    <button
      id={props.id}
      type={props.type}
      onClick={props.click}
      class="flex border rounded-md hover:bg-violet-200 active:scale-95"
    >
      {props.children}
    </button>
  );
}
