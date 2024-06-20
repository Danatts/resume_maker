import { Show } from "solid-js";
import type { JSXElement } from "solid-js";

export default function PreviewSection(props: {
  title?: string;
  children: JSXElement;
}) {
  return (
    <section class="mb-6 mx-auto">
      <Show when={props.title}>
        <h2 class="text-xl font-bold mb-2">{props.title}</h2>
      </Show>
      <div class="flex flex-col gap-4">{props.children}</div>
    </section>
  );
}
