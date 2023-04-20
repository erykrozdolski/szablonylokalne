import React from "react";

const Footer = () => {
  const yearNow = new Date().getFullYear();
  return (
    <div className="bg-grey mt-4 ">
      <div className="max-w-7xl lg:mx-auto mx-4 px-2 py-4 flex justify-end">
        &copy; Panie Kolego Projekt 2017-{yearNow}
      </div>
    </div>
  );
};

export default Footer;
