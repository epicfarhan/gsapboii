import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

function App() {
  const box = useRef();
  useGSAP(() => {
    gsap.from(box.current, {
      y: 300,
      duration: 1,
      delay: 1,
      opacity: 0,
      scale: 0,
    });
  });
  return (
    <>
      <div
        className="w-[300px] h-[300px] bg-fuchsia-600 m-auto"
        ref={box}
      ></div>
    </>
  );
}

export default App;
