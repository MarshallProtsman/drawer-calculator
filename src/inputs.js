import React from "react";

 let Input = ({ handleChange, ammount }) => {
  return (
    <>
      <form>
        <label>
          $100s:
          <input
            type="text"
            value={ammount}
            onChange={handleChange}
          />
        </label>
      </form>
    </>
  );
};

export default Input