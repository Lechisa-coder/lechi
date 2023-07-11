import React from "react";

const FormInput = (props) => {
  return (
    <div>
      {/* <label>UserName</label> */}
      <input
        placeholder={props.placeholder}
        onChange={(e) => props.setName(e.target.value)}
      />
    </div>
  );
};

export default FormInput;
