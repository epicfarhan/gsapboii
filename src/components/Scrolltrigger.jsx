import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import gsap from "gsap";
function Scrolltrigger() {
  const box = useRef();
  const boxContainer = useRef();

  // animate

  useEffect(() => {
    gsap.to(box.current, {
      rotate: 360,
      duration: 1,
      scrollTrigger: {
        trigger: box.current,
        scroller: "body",
        markers: true,
        start: "top 60%",
        end: "top 30%",
        scrub: 3,
      },
    });
  }, []);

  return (
    <>
      <div className="w-[100%] h-[100%] bg-amber-500 flex items-center justify-center">
        <div className="w-[200px] h-[200px] bg-amber-100"></div>
      </div>
      <div
        className="w-[100%] h-[100%] bg-amber-600 flex items-center justify-center"
        ref={boxContainer}
      >
        <div className="w-[200px] h-[200px] bg-amber-100" ref={box}></div>
      </div>
    </>
  );
}

export default Scrolltrigger;
