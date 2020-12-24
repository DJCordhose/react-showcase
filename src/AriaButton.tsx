type Props = Readonly<{
  testid: string;
  label: string;
  text: string;
  onClick: () => void;
  inProgress?: boolean;
}>;

export function AriaButton({ testid, label, text, onClick, inProgress=false }: Props) {

  return (
    <button
      data-testid={testid}
      className={`
      bg-gray-100 border-2 border-gray-900
      hover:border-gray-500 hover:bg-gray-200 
      active:border-gray-200 active:bg-gray-400 
      px-2 py-2 w-20 mx-2 my-2 ${inProgress ? "animate-spin" : ""}`}
      aria-label={label}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
