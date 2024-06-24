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
        d="M6 9L12 15L18 9"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
