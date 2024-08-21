import axios from "axios";
import React, { useState } from "react";
import Log from "./Log";

const Button3 = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [newError, setNewError] = useState();
  const log = Log();

  const button3Data = async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://localhost:5000/2");
      const data = res.data;
      log("button 3 data :", data);
      setData(data);
      setNewError(true);
    } catch (error) {
      log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
     <div className="div flex flex-col">
      <button
        className="bg-red-200 border hover:bg-red-500 border-black rounded-md p-2 shadow-slate-700"
        onClick={button3Data}>C</button>
      <div className="mainDiv mt-1">
        <div className="bg-gray-100 w-56 h-80 p-2 ml-[38px] shadow-slate-700 border rounded-md">
          {loading ? (
            <div className="skeleton">
              <div className="bg-red-300 w-56 h-56"></div>
              <div className="bg-green-300 mt-2 h-5 w-16 rounded animate-pulse"></div>
            <div className="bg-green-300 mt-2 h-5 w-14 rounded animate-pulse"></div>
             <div className="flex justify-between gap-5">
            <div className="bg-green-300 mt-2 h-5 w-10 rounded animate-pulse"></div>
            <div className="bg-green-300 mt-2 h-5 w-10 rounded animate-pulse"></div>
            </div>
            </div>
          ) : newError ? (
            <div>
                <h3 className="text-center">User not Found</h3>
            </div>
          ) : data ? (
            <div>
              <img src={data.img} alt="Self.jpg" className="w-40 h-40 shadow-slate-700 border rounded-md" />
              <h1 className="mt-2">{data.name}</h1>
              <h2 className="mt-2">{data.age}</h2>
              <div className="flex justify-between mt-2">
                <button className="bg-blue-500 p-1">Edit</button>
                <button className="bg-red-500 p-1">Delete</button>
              </div>
            </div>
          ):(
            <p className="text-center">No data available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Button3;