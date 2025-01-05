"use client";

import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState<number>(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      {count}
      <div onClick={handleClick}>증가</div>
    </>
  );
}
