//import PropTypes from "prop-types";
import { useState } from "react";
import { useEffect } from "react";

const data = [
  { id: 1, description: "data show" },
  { id: 2, description: "data show 2" },
];
const Button = ({ text, color }) => {
  const [message, setMessage] = useState("welcome");
  // console.log(message);
  const [count, setCount] = useState(0);
  const [counts, setCounts] = useState(2);
  useEffect(() => {
    document.title = `you have clicked ${counts}`;
  });
  onclick = (name) => {
    console.log(name);
  };
  return (
    <>
      {data.map((datas) => (
        <h2>
          Description:{datas.description},id:{datas.id}
        </h2>
      ))}
      {/* <button onClick={onclick("lechisa")} style={{ backgroundColor: color }}>
        {text}
      </button> */}
      <h2 style={{ color: "green" }}> clicked {count} Times</h2>
      <button onClick={() => setCount(count + 1)}>Click</button>
      <p>you clicked {counts} times</p>
      <button onClick={() => setCounts(counts + 1)}>UseEffect</button>
      <h3>{message}</h3>
      <button onClick={() => setMessage("subscribed")}>Subscribe</button>
    </>
  );
};
//Button.PropTypes = { color: PropTypes.string, text: PropTypes.string };
export default Button;
