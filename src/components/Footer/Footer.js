import React from "react";

const Footer = () => {
  return (
    <div id="Footer" className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center">
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">Feel free to reach out!</h3>
      </div>
      <ul>
        <li className="flex gap-1 items-center text-xs md:text-sm">
          <i className="fa-brands fa-github text-lg"></i>
          <span>myemail@gmail.com</span>
        </li>
        <li className="flex gap-1 items-center text-xs md:text-sm">
          <i className="fa-brands fa-linkedin text-lg"></i>
          <span>linkedin.com/username</span>
        </li>
        <li className="flex gap-1 items-center text-xs md:text-sm">
          <i className="fa-solid fa-envelope text-lg"></i>
          <span>github.com/username</span>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
