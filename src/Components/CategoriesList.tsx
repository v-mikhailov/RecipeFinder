import React, { useEffect } from 'react';
import Carousel from 'react-elastic-carousel';
import { Avatar, makeStyles, Theme, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import { getCategories, searchByCategory } from '../Redux/actions';
import { RootState } from '../Redux/rootReducer';
import { CategoryInterface } from '../interfaces';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: '80%',
    [theme.breakpoints.only('xs')]: {
      width: '100%'
    },
  },

  categoryBlock: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginRigth: '20px'
  },
  img: {
    width: '72px',
    height: '72px',
    [theme.breakpoints.only('xs')]: {
      width: '48px',
      height: '48px',
    },
  },
}));

const CategoriesList = () => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const categories = useSelector((state: RootState) => state.dishes.categories)

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])

  const handleClick = (event: any) => {
    dispatch(searchByCategory(event.currentTarget.textContent))
  }

  return (
    <div className={styles.container}>
      {categories && (
        <Carousel
          breakPoints={[
            {width: 320, itemsToShow: 3},
            {width: 600, itemsToShow: 6}
          ]}
          itemPadding={[0, 15]}
          pagination={false}
        >
          {
            categories.map((category: CategoryInterface) => {
              return (
                <div 
                  className={styles.categoryBlock} 
                  key={category.strCategory}
                  onClick={handleClick}
                >
                  <Avatar alt={category.strCategory} src={category.strCategoryThumb} className={styles.img}/>
                  <Typography>
                    {category.strCategory}
                  </Typography>
                </div>
              )
            })
          }
        </Carousel>
      )}
    </div>
  )
}

export default CategoriesList;