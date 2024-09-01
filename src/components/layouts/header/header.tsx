import React, { useState } from "react";
import CategoryMenu from "./category-menu";
import SearchBar from "./search-bar";
import Menu from "./menu";

const Header: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      {/* <TopHeader /> */}
      <SearchBar />
      <div className="relative">
        <Menu setShowMenu={setShowMenu} />
        {showMenu && <CategoryMenu />}
      </div>
    </>
  );
};

export default Header;
