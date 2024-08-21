import axios from "axios";
import React, { useState } from "react";
import Button3 from "./Button3";
import Log from "./Log";

const Button1 = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [on, setOn] = useState(false);
 const log = Log(on)

  const setToggle = () => {
    setOn(!on);
  };

  const button1Data = async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://localhost:5000/0");
      const data = res.data;
      log("button 1 data :", data);
      setTimeout(()=>{
        setData(data);
        setLoading(false)
      },1000)
    } catch (error) {
      log("Error :", error);
      setLoading(false);
    }
  };

  const button2Data = async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://localhost:5000/1");
      const data = res.data;
      log("button 2 data :", data);
      setTimeout(()=>{
        setData(data);
        setLoading(false)
      },5000)
    } catch (error) {
      log("Error :", error);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex justify-between bg-blue-600 p-4 mx-2">
        <h1 className="text-white text-xl font-bold">Navbar</h1>
        <button onClick={setToggle} className="flex px-4 py-2 rounded overflow-hidden">
      <span
        className={`flex-1 px-2 py-1 text-center ${on?'bg-white text-black':'bg-black text-white'}`}>{on?"ON":"OFF"}</span>
      <span
        className={`flex-1 px-2 py-1 text-center ${on?'bg-black text-white':'bg-white text-black'}`}>{on?"OFF":"ON"}</span>
    </button>
      </div>
      <div className="flex mt-4 space-x-4 mx-2">
        <div className="w-1/3">
          <button
            className="bg-green-200 border border-black hover:bg-green-500 text-black rounded-md px-4 py-2 w-full"
            onClick={button1Data}>A</button>
        </div>
        <div className="w-1/3">
          <button
            className="bg-blue-200 border border-black hover:bg-blue-500 text-black rounded-md px-4 py-2 w-full"
            onClick={button2Data}>B</button>
        </div>
        <div className="w-1/3 h-5">
          <Button3 />
        </div>
      </div>
      <div className="bg-gray-100 w-56 h-80 p-4 mt-1 ml-[38px] shadow-slate-700 border rounded-md ">
        {loading ? (
          <div className="flex flex-col items-center">
            <div className="bg-green-300 w-56 h-52 rounded animate-pulse"></div>
            <div className="bg-green-300 mt-2 h-6 w-24 rounded animate-pulse"></div>
            <div className="bg-green-300 mt-2 h-5 w-16 rounded animate-pulse"></div>
            <div className="flex justify-between gap-10">
            <div className="bg-green-300 mt-2 h-5 w-10 rounded animate-pulse"></div>
            <div className="bg-green-300 mt-2 h-5 w-10 rounded animate-pulse"></div>
            </div>
          </div>
        ) : data ? (
          <div className="text-center">
            <img src={data.img} alt="error.jpeg" className="w-56 h-40 mx-auto shadow-slate-700 border rounded-md" />
            <h1 className="mt-2 text-lg font-semibold">Name : {data.name}</h1>
            <h2 className="mt-2 text-md">Age : {data.age}</h2>
            <div className="flex justify-around mt-4">
              <button className="bg-blue-500 text-white px-2 py-1 rounded">Edit</button>
              <button className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
            </div>
          </div>
        ) : (
          <p className="text-center">No data available</p>
        )}
      </div>
    </>
  );
};

export default Button1;