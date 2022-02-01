import { Button } from "ui";
import { useCounter } from "core";

export default function Web() {
  const { count, increase, decrease } = useCounter();
  return (
    <>
      <div>
        <h1>Web</h1>
        <Button />
      </div>

      <div>
        <div>Current Count: {count}</div>
        <div>
          <button onClick={increase}>Increase</button>{" "}
          <button onClick={decrease}>Decrease</button>
        </div>
      </div>
    </>
  );
}
