import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

import LinkBtn from "./Link";
const NavBar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, path: "/home", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/skill", name: "Skills" },
    { id: 4, path: "/education", name: "Education" },
    { id: 5, path: "/project", name: "Project" },
    { id: 6, path: "/contact", name: "Contact" },
  ];
  return (
    <nav className="p-6 w-full  static  bg-[#383636] opacity-0.8 text-white">
      <div className="md:hidden " onClick={() => setOpen(!open)}>
        {open ? (
          <IoClose className="text-2xl cursor-pointer" />
        ) : (
          <IoMenu className="text-2xl cursor-pointer" />
        )}
      </div>
      <ul
        className={`md:flex z-10  justify-end absolute md:static mt-2 duration-1000 h-full
         ${open ? "left-0 w-44  " : "left-[-100%]"}
         bg-[#383636] opacity-0.8 text-white px-6 `}
      >
        {routes?.map((route) => (
          <LinkBtn key={route.id} route={route} className="mx-8" />
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
