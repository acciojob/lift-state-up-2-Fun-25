import React from "react";

function Child({ setInput }) {
  return (
    <div>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
    </div>
  );
}

export default Child;
