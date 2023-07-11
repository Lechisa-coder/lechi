import React from "react";
const names = [
  { fname: "Lechisa", lname: "Bedasa", deparment: "software" },
  { fname: "Kuma", lname: "Negga", deparment: "Agri" },
  { fname: "korsa", lname: "Galata", deparment: "Economics" },
];
const Header = (props) => {
  return (
    <div>
      <h1>this is from header component</h1>
      <h3 style={{ textAlign: "center", color: "green" }}>{props.title}</h3>
      <h3>Learn React from Traversy</h3>
      {names.map((name) => (
        <h3 key={name.id}>
          FirstName:{name.fname}, LastName:{name.lname},Department:
          {name.deparment}
        </h3>
      ))}
    </div>
  );
};

export default Header;
