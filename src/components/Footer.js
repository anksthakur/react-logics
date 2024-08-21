import React, { useEffect, useState } from "react";

const Footer = () => {
  const [timeHMR, setTimeHMR] = useState(new Date());

  useEffect(() => {
    let timeSeconds = setInterval(() => {
      setTimeHMR(new Date());
    }, 1000);
    return () => clearInterval(timeSeconds);
  }, []);

  const date = timeHMR.getDate();
  const month = timeHMR.getMonth() + 1;
  const year = timeHMR.getFullYear();
  const hours = timeHMR.getHours();
  const minutes = timeHMR.getMinutes();
  const seconds = timeHMR.getSeconds();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  return (
    <>
      <div className="flex items-end flex-col mx-2">
        <p className="text-red-600">
          Date : {date}/{month}/{year}
        </p>
       <p className="text-blue-600">
          Time : {hours}:{minutes}:{seconds} {ampm}
        </p>
      </div>     
    </>
  );
};

export default Footer;