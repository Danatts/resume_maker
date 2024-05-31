export default function ExpandedIcon(props: { size: number }) {
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
      <title>Expand</title>
      <path
        d="m19.5 8.25-7.5 7.5-7.5-7.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
