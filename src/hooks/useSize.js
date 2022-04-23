import { useRef, useEffect, useState, useCallback } from "react";

const useSize = () => {
  let observer = useRef();

  const nullSize = { width: null, height: null };

  const [currentSize, setCurrentSize] = useState(nullSize);

  const getSize = (elements) => {
    const el = elements[0].target;

    if (!el) return;

    let width = el.offsetWidth ?? 0;
    let height = el.offsetHeight ?? 0;

    setCurrentSize({ width, height });
  };

  const isMobile = () => {
    return currentSize.width < 800 ? true : false;
  }

  const getDeviceType = () => {
    return currentSize.width < 800 ? "mobile" : "desktop";

  }

  const target = useCallback((element) => {
    if (element) {
      observer.current = new ResizeObserver(getSize).observe(element);
    }
  }, []);

  useEffect(() => {
    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, []);

  return [target, currentSize, getDeviceType]; 
};

export default useSize;