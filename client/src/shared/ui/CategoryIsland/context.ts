import { createContext } from 'react';
import { ICategoryItem } from './types';

export const CategoryContext = createContext<{
  toggleHoverItem: (itemId: string, item: unknown, isHovered: boolean) => void;
  hoveredItem: ICategoryItem | null;
}>({
  toggleHoverItem: () => {},
  hoveredItem: null,
});
