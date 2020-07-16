import React, { useState, useEffect } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    return () => {
      console.log("useEffect");
    };
  });

  useEffect(() => {
    console.log("useEffect WillUnmount");
  }, []);

  useEffect(() => {
    console.log("useEffect DidMount");
  }, []);

  const inc = () => setValue((prevValue) => prevValue + 1);

  const dec = () => setValue((prevValue) => prevValue - 1);

  const [text, setText] = useState("");

  const handleChange = ({ target }) => setText(target.value);

  return (
    <div>
      <button
        style={{
          margin: "10px",
          height: "30px",
          width: "80px",
          border: "none",
          backgroundColor: "yellow",
        }}
        type="button"
        onClick={inc}
      >
        Plus
      </button>
      <span>{value}</span>
      <button
        style={{
          margin: "10px",
          height: "30px",
          width: "80px",
          border: "none",
          backgroundColor: "yellow",
        }}
        type="button"
        onClick={dec}
      >
        Minus
      </button>
      <div>
        <input
          style={{ margin: "10px", padding: "5px", width: "175px" }}
          value={text}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Counter;
