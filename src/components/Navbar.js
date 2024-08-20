import React, { useState } from "react";

const Navbar = () => {
  const [on, setOn] = useState(false);

  const setToggle = () => {
    setOn((prevState) => !prevState)
  };

  return (
    <div className="flex justify-self-center bg-blue-600 p-4">
      <h1 className="text-white">Navbar</h1>
      <div className="onOff">
        <button
         onClick={setToggle}className="bg-white text-blue-600 px-4 py-2 rounded mr-2">{on ? "ON" : "OFF"}
         </button>
      </div>
    </div>
  );
};

export default Navbar;
