import { type JSXElement, Show } from "solid-js";
import { formatDate } from "~/utils/date";

interface Props {
  title?: string;
  subtitle?: string;
  subUrl?: string;
  start?: string;
  end?: string;
  children?: JSXElement;
}

export default function Card(props: Props) {
  return (
    <div class="flex flex-col gap-2">
      <div>
        <h3 class="text-base font-semibold">{props.title}</h3>
        <div class="flex flex-col sm:flex-row justify-between">
          <h4 class="text-sm font-medium">
            <a href={props.subUrl}>{props.subtitle}</a>
          </h4>
          <p class="text-sm font-normal">
            <span>{formatDate(props.start)}</span>
            <Show when={props.end}>
              <span> - </span>
            </Show>
            <span>{formatDate(props.end)}</span>
          </p>
        </div>
      </div>
      {props.children}
    </div>
  );
}
