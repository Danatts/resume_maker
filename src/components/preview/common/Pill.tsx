export default function Pill(props: { children: string }) {
  return (
    <span class="bg-neutral-300 rounded-md max-w-fit px-3 py-1 flex gap-1 text-xs font-medium">
      {props.children}
    </span>
  );
}
