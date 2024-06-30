import type { JSXElement } from "solid-js";

interface Props {
  for: string;
  children: JSXElement;
}

export default function Label(props: Props) {
  return (
    <label for={props.for} class="flex flex-col gap-1 font-medium grow">
      {props.children}
    </label>
  );
}
