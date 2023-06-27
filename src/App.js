import { useEffect, useState } from "react";

export default function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(-1);
  async function changeAd() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }

  useEffect(function () {
    changeAd();
  }, []);

  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={changeAd}>Advice</button>
      <Message />
    </div>
  );
}

function Message(props) {
  return (
    <div>
      <p>
        you have gotten <strong>{props.count}</strong> advice
      </p>
    </div>
  );
}
