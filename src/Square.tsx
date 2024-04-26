export default function Square({ value, onSquareClick }) {
  return (
    <>
      <button className="h-24 col-span-1 bg-gray-300" onClick={onSquareClick}>
        {value}
      </button>
    </>
  );
}
