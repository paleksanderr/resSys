import React from "react";
import { Button } from "reactstrap"
import { useState } from "react";

export default function Searchbar() {
  const [] = useState(false);
  const search = () => {
    console.log('szukaj')
  }
  return (
    <div className="d-flex">
      <input className="form-control" type="text" placeholder="Search" />
      <button 
      onClick={search}
      style={{marginLeft: "5px"}} 
      className="btn btn-primary ">Search</button>
    </div>
  );
}
