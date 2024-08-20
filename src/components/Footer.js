import React from "react";

const Footer = () => {
  const dateTime = new Date();
  const date = dateTime.getDate();
  const month = dateTime.getMonth() + 1;
  const year = dateTime.getFullYear();
  const hours = dateTime.getHours();
  const minutes = dateTime.getMinutes();
  const seconds = dateTime.getSeconds();
  return (
    <>
      <div className="footer flex justify-end mx-2">
        <p>
          Day-{date} Month-{month} Year-{year} H-{hours} M-{minutes} S-{seconds}
        </p>
      </div>
    </>
  );
};

export default Footer;
