import React, { useState } from "react";
import data from "./data";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // handle underflow and overflow of data array
    let amount = parseInt(count);
    if (amount <= 0) {
      amount = 1;
    }
    if (amount > data.length) {
      amount = data.length - 1;
    }
    setText(data.slice(0, amount)); //.slice function slice array 1st param of function is starting point and 2nd is end point and end point is not included in resultant array
  };

  return (
    <section className="section-center">
      <h2>tired of boring lorem ipsum</h2>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragrapgh: </label>
        {/* controlled input field: input bind with state using value attribute of input field then must specify the onChange event of input */}
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="btn" type="submit">
          Generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
