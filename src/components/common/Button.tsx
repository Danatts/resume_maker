import type { JSXElement } from "solid-js";

interface Props {
  id?: string;
  type: "button" | "submit" | "reset" | undefined;
  children: JSXElement;
  action?: () => void;
}

export default function Button(props: Props) {
  return (
    <button
      id={props.id}
      type={props.type}
      onClick={props.action}
      class="w-fit h-fit flex border rounded-md hover:bg-gray-100 active:scale-95"
    >
      {props.children}
    </button>
  );
}
