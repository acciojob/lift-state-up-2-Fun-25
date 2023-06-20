import React from "react";

function Child({ setInput }) {
  return (
    <div className="child">
      <input type="text" onChange={(e) => setInput(e.target.value)} />
    </div>
  );
}

export default Child;
