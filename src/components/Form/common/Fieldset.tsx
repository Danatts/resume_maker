import type { JSXElement } from "solid-js"

interface Props {
  action?: (e: Event) => void;
  children: JSXElement;
}
export default function Fieldset(props: Props) {
  return (
    <fieldset onInput={props.action} class="flex flex-col gap-2">
      {props.children}
    </fieldset>
  )
}
