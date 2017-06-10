import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import ShoppingCart from 'material-ui/svg-icons/action/shopping-cart';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    height: 620,
    overflowY: 'auto',
  },
};

const ProductGrid = (props) => (
  <div style={styles.root}>
    <GridList
      cellHeight={300}
      style={styles.gridList}
      cols={3}
    >
      {Object.keys(props.products).map((keyProduct) => {
        return <GridTile
          key={props.products[keyProduct].img}
          title= {<span>{props.products[keyProduct].title} {props.discountList[props.products[keyProduct].discount][0]}</span>}
          subtitle={<span>Price: <b>{props.products[keyProduct].price} $</b></span>}
          actionIcon={<IconButton><ShoppingCart color="black" onClick = {()=>props.addToCart(keyProduct)}/></IconButton>}
        >
          <img src={props.products[keyProduct].img} alt={props.products[keyProduct].title}/>
        </GridTile>;
      })}
    </GridList>
  </div>
);

export default ProductGrid;
