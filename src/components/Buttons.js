import React from "react";

const Buttons = ({ button, onClick }) => {
  return (
    <div>
      <button
        className="bg-green-200 border border-black hover:bg-green-500 text-black rounded-md px-4 py-2 w-full" onClick={onClick}>{button}</button>
    </div>
  );
};
export default Buttons;
