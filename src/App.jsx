import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";

function App() {
  // box one
  const [boxpos, changed] = useState(0);
  const random = gsap.utils.random(-500, 500, 10);
  const box = useRef();

  useGSAP(() => {
    gsap.to(box.current, {
      x: boxpos,
      duration: 1,
      delay: 1,
    });
  }, [boxpos]);

  // box two
  const boxTwo = useRef();
  const { contextSafe } = useGSAP();
  const animate = contextSafe(function () {
    gsap.to(boxTwo.current, {
      x: 1000,
      duration: 1,
      delay: 1,
    });
  });
  return (
    <>
      <div
        className="w-[300px] h-[300px] bg-fuchsia-600 m-auto"
        ref={box}
      ></div>
      <button
        onClick={() => {
          changed(random);
        }}
        className="pt-2 pb-2 pr-7 pl-7 bg-amber-500 font-bold cursor-pointer"
      >
        click
      </button>

      <div className="w-[300px] h-[300px] bg-pink-800" ref={boxTwo}></div>
      <button
        onClick={() => animate()}
        className="pt-2 pb-2 pr-7 pl-7 bg-red-600 font-bold cursor-pointer"
      >
        move
      </button>
    </>
  );
}

export default App;
