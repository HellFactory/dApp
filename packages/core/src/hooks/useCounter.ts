import { atom, useRecoilState } from "recoil";

const counterState = atom({
  key: "counterState",
  default: 0,
});

export const useCounter = () => {
  const [count, setCount] = useRecoilState(counterState);
  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);

  return {
    count,
    increase,
    decrease,
  };
};
