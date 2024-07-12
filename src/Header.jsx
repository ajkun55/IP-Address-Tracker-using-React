import { useState } from "react";
import Arrow from "/images/icon-arrow.svg";
import { useEffect } from "react";

const api_key = "at_E5co7TIGVo3dUJApBmAlZhB404U8O";

function Header({ setData }) {
  const [input, setInput] = useState("");

  async function query(reque = "") {
    const response = await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${api_key}&domain=${reque}`
    );
    const data = await response.json();
    // console.log(data);
    setData(data);
  }
  useEffect(() => {
    query(input);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(input);
    query(input);
  }

  return (
    <div>
      <h1>IP Address Tracker</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for any IP address or domain"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">
          <img src={Arrow} alt="" />
        </button>
      </form>
    </div>
  );
}

export default Header;
