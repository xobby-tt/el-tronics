import AcUnitIcon from '@mui/icons-material/AcUnit';
import { Box } from '@mui/material';
import { CategoryIsland } from '../../../../shared/ui';
import classes from './HomePage.module.css';
import { memo, useEffect } from 'react';

const CATEGORIES = [
  {
    id: 1,
    name: 'Refrigerators',
  },
  {
    id: 2,
    name: 'Laptops',
  },
  {
    id: 3,
    name: 'Phones',
  },
  {
    id: 4,
    name: 'Home',
  },
];
export const DetailInfo = memo(({ category }: any) => {
  return <h1>{category.name}</h1>;
});

export const HomePage = () => {
  return (
    <Box className={classes.promoContainer}>
      <Box sx={{ flexShrink: 0 }}>
        <CategoryIsland
          width={'300px'}
          height={'350px'}
          detailInfo={(item) => <DetailInfo category={item} />}
        >
          {CATEGORIES.map((category) => (
            <CategoryIsland.Item key={category.id} data={category}>
              <AcUnitIcon />
              {category.name}
            </CategoryIsland.Item>
          ))}
        </CategoryIsland>
      </Box>

      <img src="50.png" width={'700px'} style={{ alignSelf: 'center', flexGrow: 1 }}></img>
    </Box>
  );
};
