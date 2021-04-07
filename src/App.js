import React, { useState } from "react";
import data from "./data";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let amount = parseInt(count);
    if (amount <= 0) {
      amount = 1;
    }
    if (amount > data.length) {
      amount = data.length - 1;
    }
    setText(data.slice(0, amount));
  };

  return (
    <section className="section-center">
      <h2>tired of boring lorem ipsum</h2>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragrapgh: </label>
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
