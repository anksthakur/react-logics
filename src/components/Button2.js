import axios from "axios";
import React, { useState } from "react";

const Button2 = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  const button2Data = async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://localhost:5000/1");
      const data = res.data;
      console.log("button 2 data :" , data);
      setData(data);
    } catch (error) {
      console.error("Error :", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="div flex flex-col">
      <button
        className="bg-blue-200 border hover:bg-blue-500 border-black rounded-md p-2 mt-16"
        onClick={() => setTimeout(button2Data,5000)}>B</button>
      <div className="mainDiv mt-4">
        <div className="bg-gray-400 w-56 h-80 p-2">
          {loading ? (
            <div className="skeleton">
              <div className="bg-blue-300 w-56 h-56"></div>
              <h1 className="bg-blue-300 mt-2 h-6 w-24 rounded">Name</h1>
              <h2 className="bg-blue-300 mt-2 h-5 w-16 rounded">Age</h2>
            </div>
          ) : data ? (
            <div>
              <img src={data.img} alt="a.jpg" className="w-40 h-40" />
              <h1 className="mt-2">{data.name}</h1>
              <h2 className="mt-2">{data.age}</h2>
              <div className="flex justify-between mt-2">
                <button className="bg-blue-500 p-1">Edit</button>
                <button className="bg-red-500 p-1">Delete</button>
              </div>
            </div>
          ) : (
            <p>No data available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Button2;