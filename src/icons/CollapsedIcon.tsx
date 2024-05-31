export default function CollapsedIcon(props: { size: number }) {
  return (
    <svg
      fill="none"
      height={props.size}
      view-box="0 0 24 24"
      stroke-width={1.5}
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
    >
      <title>Collapse</title>
      <path
        d="m8.25 4.5 7.5 7.5-7.5 7.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
