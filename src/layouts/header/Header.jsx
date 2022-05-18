import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

import { Logo } from "../../components/icons/index";
import { Headeritems } from "../../utils/index";
import { Search } from "../search/index";

const Header = () => {
  const renderItems = () => {
    return (
      Headeritems &&
      Headeritems.map((item) => (
        <NavLink
          to={item.to}
          key={item.id}
          className={({ isActive }) =>
            isActive ? "text-cpink" : "text-ctext"
          }>
          <span className="cursor-pointer leading-6 font-medium flex items-center gap-x-1 transition-all">
            {item.title}
          </span>
        </NavLink>
      ))
    );
  };
  return (
    <div className="w-full sticky top-0">
      <div className="py-5 max-w-[1177px] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-x-[88px]">
          <Link to="/" className="pb-[3px] pl-[3px]">
            <Logo />
          </Link>
          <div className="flex items-center gap-x-[35px]">{renderItems()}</div>
        </div>
        <div className="">
          <Search />
        </div>
      </div>
      <Outlet />
    </div>
  );
};
export default Header;
