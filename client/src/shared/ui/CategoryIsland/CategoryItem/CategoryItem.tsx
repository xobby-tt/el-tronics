import clsx from 'clsx';
import { PropsWithChildren, useContext, useEffect, useId } from 'react';
import { useHover } from '../../../lib/browser';
import { CategoryContext } from '../context';
import classes from './CategoryItem.module.css';

interface ItemProps<T> {
  data: T;
}

export const CategoryItem = <T,>({ children, data, ...props }: PropsWithChildren<ItemProps<T>>) => {
  const itemId = useId();

  const { hoverRef, isHovered } = useHover<HTMLButtonElement>();
  const { toggleHoverItem, hoveredItem } = useContext(CategoryContext);

  useEffect(() => {
    if (!isHovered) {
      toggleHoverItem(itemId, data, false);
    } else if (isHovered) {
      toggleHoverItem(itemId, data, true);
    }
  }, [isHovered]);

  return (
    <button
      ref={hoverRef}
      className={clsx(classes.item, hoveredItem?.id === itemId && classes._hovered)}
      {...props}
    >
      {children}
    </button>
  );
};
