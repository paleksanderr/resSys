import React from "react";
import { Button } from "reactstrap"
import { useState } from "react";

export default function Searchbar() {
  const [term, setTerm] = useState(false);
  const search = () => {
    console.log('szukaj', term)
  }
  
  return (
    <div className="d-flex">
      <input 
      value={term}
      onKeyDown={(e) => e.key === 'Enter' && search()}  // keydown is fired when user presses a key on the keyboard.
      onChange={e => setTerm(e.target.value)}
      className="form-control" 
      type="text" 
      placeholder="Search" />
      <button 
      onClick={search}
      style={{marginLeft: "5px"}} 
      className="btn btn-primary ">Search</button>
    </div>
  );
}
