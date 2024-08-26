import axios from "axios";
import React, { useCallback, useState } from "react";
import Log from "./Log";
import Buttons from "./Buttons";

const Button1 = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [on, setOn] = useState(false);
  const [error, setError] = useState(null);
  const [controller, setController] = useState(null);
  const log = Log(on);

  const url0 = "http://localhost:5000/0";
  const url1 = "http://localhost:5000/1";
  const url2 = "http://localhost:5000/2";

  const setToggle = () => {
    setOn(!on);
  };

  const cancelRequest = useCallback(() => {
    if (controller) {
      controller.abort();
    }
    const newController = new AbortController();
    setController(newController);
    return newController.signal;
  }, [controller]);

  const button1Data= useCallback(async () => {
    setLoading(true);
    const signal = cancelRequest();
    setTimeout(async () => {
      try {
        const res = await axios.get(url0, { signal });
        const data = res.data;
        log("button 1 data :", data);
        setData(data);
      } catch (error) {
        if (axios.isCancel(error)) {
          log("Request canceled button 1:", error.message);
        } else {
          log("Error in button 1:", error);
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    }, 1000);
  }, [cancelRequest,log]);

  const button2Data = useCallback(async () => {
    setLoading(true)
    const signal = cancelRequest();
    setTimeout(async () => {
      try {
        const res = await axios.get(url1,{signal});
        const data = res.data;
        log("button 2 data :", data);
        setData(data);
      } catch (error) {
        if (axios.isCancel(error)) {
          log("Request canceled button 2:", error.message);
        } else {
          log("Error in button 2:", error);
          setError("button error", error.message);
        }
      } finally {
        setLoading(false);
      }
    }, 5000);
  },[cancelRequest,log]);

  const button3Data = useCallback(async () => {
    setLoading(true)
    const signal = cancelRequest(); 
    try {
      const res = await axios.get(url2,{signal});
      if (res.status === 200) {
        throw new Error("User Not Found");
      }
      const data = res.data;
      log("button 3 data :", data);
      setData(data);
    } catch (error) {
      log("Error in button 3:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  },[cancelRequest,log]);

  return (
    <>
      <div className="flex justify-between bg-blue-600 p-4 mx-2">
        <h1 className="text-white text-xl font-bold">Navbar</h1>
        <button onClick={setToggle} className="flex px-4 py-2 rounded overflow-hidden">
          <span className={`flex-1 px-2 py-1 text-center ${on ? 'bg-white text-black' : 'bg-black text-white'}`}>{on ? "ON" : "OFF"}</span>
          <span className={`flex-1 px-2 py-1 text-center ${on ? 'bg-black text-white' : 'bg-white text-black'}`}>{on ? "OFF" : "ON"}</span>
        </button>
      </div>
      <div className="flex mt-4 space-x-4 mx-2 justify-between">
        <Buttons button="A" onClick={button1Data}/>
        <Buttons button="B" onClick={button2Data}/>
        <Buttons button="C" onClick={button3Data}/>
      </div>
      <div className="flex justify-center items-center mt-[100px]">
        <div className="loadingDiv bg-gray-100 w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 shadow-lg border rounded-md">
          {loading ? (
            <div className="flex flex-col items-center">
              <div className="bg-gray-300 w-72 h-52 rounded animate-pulse"></div>
              <div className="bg-gray-300 mt-2 h-6 w-24 rounded animate-pulse"></div>
              <div className="bg-gray-300 mt-2 h-5 w-16 rounded animate-pulse"></div>
              <div className="flex justify-between gap-10">
                <div className="bg-gray-300 mt-2 h-5 w-10 rounded animate-pulse"></div>
                <div className="bg-gray-300 mt-2 h-5 w-10 rounded animate-pulse"></div>
              </div>
            </div>
          ) : error ? (
            <div className="text-center text-red-500">{error}</div>
          ) : data ? (
            <div className="text-center">
              <img src={data.img} alt="error.jpeg" className="w-72 h-40 mx-auto shadow-slate-700 border rounded-md" />
              <h1 className="mt-2 text-lg font-semibold">Name: {data.name}</h1>
              <h2 className="mt-2 text-md">Age: {data.age}</h2>
              <div className="flex justify-around mt-4">
                <button className="bg-blue-500 text-white px-2 py-1 rounded">Edit</button>
                <button className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
              </div>
            </div>
          ) : (
            <p className="text-center">No data available</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Button1;