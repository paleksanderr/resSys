import React from "react";

export default function Searchbar() {
  return (
    <div className="d-flex">
      <input className="form-control" type="text" placeholder="Search" />
      <button className="btn btn-primary">Search</button>
    </div>
  );
}
