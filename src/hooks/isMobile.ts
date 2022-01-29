import { useEffect, useState } from "react";

export const IsMobile = () => {
  const isBrowser = typeof window !== "undefined";
  if (!isBrowser) return null;
  const [width, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return width <= 425;
};
