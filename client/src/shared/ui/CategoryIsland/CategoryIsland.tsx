import { Box, Paper } from '@mui/material';
import { clsx } from 'clsx';
import { PropsWithChildren, ReactElement, useEffect, useState } from 'react';
import { useHover } from '../../lib/browser';
import classes from './CategoryIsland.module.css';
import { CategoryContext } from './context';
import { ICategoryItem } from './types';
import { CategoryItem } from './CategoryItem/CategoryItem';

interface ICategoryIslandProps {
  width?: string;
  height?: string;
  detailInfo: (item: unknown) => ReactElement;
}

export const CategoryIsland = ({
  children,
  detailInfo,
  width = '300px',
  height = '200px',
}: PropsWithChildren<ICategoryIslandProps>) => {
  const [hoveredItem, setHoveredItem] = useState<ICategoryItem | null>(null);
  const { hoverRef: hoverDetailRef, isHovered: isDetailHovered } = useHover();

  const toggleHoverItem = (id: string, item: unknown, isHovered: boolean) => {
    if (id === hoveredItem?.id && !isHovered && !isDetailHovered) {
      setHoveredItem(null);
    } else if (isHovered) {
      setHoveredItem({ id, item });
    }
  };

  useEffect(() => {
    if (!isDetailHovered) setHoveredItem(null);
  }, [isDetailHovered]);

  return (
    <CategoryContext.Provider value={{ toggleHoverItem, hoveredItem }}>
      <Box display={'flex'} ref={hoverDetailRef}>
        {<Box sx={{ width, height }}></Box>}
        <Paper
          elevation={3}
          className={clsx(classes.paper, hoveredItem && classes.active)}
          sx={{ width, height, transition: 'width 0.3s linear', borderRadius: '20px' }}
        >
          <Box className={classes.items} sx={{ width }}>
            {children}
          </Box>
          {hoveredItem && <Box className={classes.popup}>{detailInfo(hoveredItem.item)}</Box>}
        </Paper>
      </Box>
    </CategoryContext.Provider>
  );
};

CategoryIsland.Item = CategoryItem;
