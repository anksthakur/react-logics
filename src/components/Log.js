import { useEffect, useState } from "react";

const Log = (logEnable) => {
  const [custom, setCustom] = useState();

  useEffect(() => {
    setCustom(process.env.NODE_ENV === "production");
  }, []);

  const customLog = (...arg) => {
    if (!custom && logEnable) { 
      console.log(...arg);
    }
  };
  return customLog;
};
export default Log;