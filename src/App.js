import "./App.css";
//import Header from "./component/Header";
// import Footer from "./component/Footer";
import Button from "./component/Button";
import { useState } from "react";
import FormInput from "./component/FormInput";
function App() {
  const [name, setName] = useState("");

  console.log(name);
  return (
    <div style={{ textAlign: "center", border: "2px", borderColor: "red" }}>
      <form style={{ margin: "20px", padding: "5px" }}>
        <div style={{ padding: "5px", margin: "3px" }}>
          <FormInput placeholder="user name" setName={setName} />
          <FormInput placeholder="email" />
          <FormInput placeholder="department" />
          <FormInput placeholder="address" />
        </div>
      </form>
      {/* <Header title="hello" /> */}
      {/* <Footer titles="Footers in React" />
      <Button text="Add" color="green" /> */}
      <Button />
    </div>
  );
}

export default App;
