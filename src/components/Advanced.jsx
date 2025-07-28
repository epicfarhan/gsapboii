import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Advanced() {
  const target = useRef();
  const button = useRef();
  const tl = gsap.timeline();

  function move() {
    tl.from(target.current, {
      y: 220,
      delay: 1,
      duration: 1.3,
      opacity: 0,
    });

    tl.from(button.current, {
      opacity: 0,
      duration: 1,
    });
  }

  useGSAP(() => move());

  return (
    <>
      <h1
        ref={target}
        className="text-[150px] text-center font-bold pt-[200px]"
      >
        hello
      </h1>
      <button
        className="text-[15px] bg-black pt-2 pb-2 text-fuchsia-600 font-bold pr-8 pl-8 rounded m-auto block"
        ref={button}
      >
        click
      </button>
    </>
  );
}

export default Advanced;
