import { useState, useEffect } from "react";

const useInView = (elementRef, threshold = 0.6) => {
  useEffect(() => {
    const element = elementRef?.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log(entry.intersectionRatio);
        if (!entry.isIntersecting) {
          entry.target.classList.remove("force-show");
        } else {
          entry.target.classList.add("force-show");
        }
      },
      { threshold, root: document?.querySelector("._App") }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [elementRef, threshold]);

  //   return isInView;
};

export default useInView;
