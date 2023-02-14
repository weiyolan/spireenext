import { useEffect, useRef } from "react";

// Naive implementation - in reality would want to attach
// a window or resize listener. Also use state/layoutEffect instead of ref/effect
// if this is important to know on initial client render.
// It would be safer to  return null for unmeasured states.
export const useDimensions = (ref, svg) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    dimensions.current.width = svg?ref.current.scrollWidth:ref.current.offsetWidth;
    dimensions.current.height = svg?ref.current.scrollHeight:ref.current.offsetHeight;
  }, [ref, svg]);

  return dimensions.current;
};
