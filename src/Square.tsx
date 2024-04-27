import React from "react";

interface SquareProps {
  value: string;
  onSquareClick: () => void;
}

const Square: React.FC<SquareProps> = ({ value, onSquareClick }) => {
  return (
    <button
      className="flex items-center justify-center w-20 h-20 text-3xl font-bold border-4 border-black"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
};

export default Square;
