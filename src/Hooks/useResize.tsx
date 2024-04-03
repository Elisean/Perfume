import { useState, useEffect } from 'react';

export const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (event:any) => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    width,
    isScreenSm: width >= 320,
    isScreenMd: width >= 568,
    isScreenLg: width >= 768,
    isScreenXl: width >= 993,
    isScreenXxl: width >= 1300,
  };
};