import React from "react";

import { Button } from "../../components/button/index";
import { Input } from "../../components/input/index";
import { ISearch } from "../../components/icons";
const Search = () => {
  return (
    <div className="flex items-center">
      <Input className="border-2 border-r-0" />
      <Button className="w-[51px]">
        <ISearch />
      </Button>
    </div>
  );
};

export default Search;
