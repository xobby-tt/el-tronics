import { useRef } from 'react';

export const useFirstRender = () => {
  const isFrirstRender = useRef(true);

  if (isFrirstRender.current) {
    isFrirstRender.current = false;
    return true;
  }

  return isFrirstRender.current;
};
