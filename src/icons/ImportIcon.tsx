export default function ImportIcon(props: { size: number }) {
  return (
    <svg
      fill="none"
      height={props.size}
      stroke-width="1.5"
      stroke="currentColor"
      viewBox="0 0 24 24"
      width={props.size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Import saved data</title>
      <path
        d="M4 13V19C4 20.1046 4.89543 21 6 21H18C19.1046 21 20 20.1046 20 19V13"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 3L12 15M12 15L8.5 11.5M12 15L15.5 11.5"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
