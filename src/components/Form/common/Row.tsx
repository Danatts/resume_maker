import type { JSXElement } from "solid-js"

interface Props {
  children: JSXElement;
}
export default function Row(props: Props) {
  return (
    <div class="flex justify-between">
      {props.children}
    </div>
  )
}
