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
      {props.products.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          subtitle={<span>Price: <b>{tile.price} $</b></span>}
          actionIcon={<IconButton><ShoppingCart color="black" onClick = {()=>props.addToCart(tile.id)}/></IconButton>}
        >
          <img src={tile.img} alt={tile.title}/>
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default ProductGrid;
