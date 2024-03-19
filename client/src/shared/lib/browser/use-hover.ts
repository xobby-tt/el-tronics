import { useEffect, useRef, useState } from 'react';

export const useHover = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const enter = () => {
      setIsHovered(true);
    };
    const leave = () => {
      setIsHovered(false);
    };

    ref.current?.addEventListener('mouseenter', enter);
    ref.current?.addEventListener('mouseleave', leave);

    return () => {
      ref.current?.removeEventListener('mouseenter', enter);
      ref.current?.removeEventListener('mouseleave', leave);
    };
  }, [ref.current]);

  return { hoverRef: ref, isHovered };
};
