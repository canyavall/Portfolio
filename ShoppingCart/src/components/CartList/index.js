import React from 'react';
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import "./index.css";
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui/svg-icons/action/delete';


const CartList = (props) => {
  return <Table fixedFooter = {true}>
    <TableHeader displaySelectAll= {false} adjustForCheckbox = {false}>
      <TableRow>
        <TableHeaderColumn>Name</TableHeaderColumn>
        <TableHeaderColumn>Quantity</TableHeaderColumn>
        <TableHeaderColumn>Price</TableHeaderColumn>
        <TableHeaderColumn>Discount</TableHeaderColumn>
        <TableHeaderColumn>Finalprice</TableHeaderColumn>
        <TableHeaderColumn>Delete</TableHeaderColumn>
      </TableRow>
    </TableHeader>

    <TableBody  displayRowCheckbox= {false}>
      {props.products.map( (product, index) => {
          if (props.cartList[product.id]){
            return <TableRow key={index} rowNumber = {product.id}>
              <TableRowColumn>{product.title}</TableRowColumn>
              <TableRowColumn>{props.cartList[product.id]}</TableRowColumn>
              <TableRowColumn>{product.price}</TableRowColumn>
              <TableRowColumn></TableRowColumn>
              <TableRowColumn>{product.price * props.cartList[product.id]}</TableRowColumn>
              <TableHeaderColumn><IconButton><DeleteIcon color="black" onClick = {()=>props.deleteFromCart(product.id)}/></IconButton></TableHeaderColumn>
            </TableRow>;
          }
        return '';
      })};
    </TableBody>
    <TableFooter>
      <TableRow style={{background: 'Silver'}}>
        <TableRowColumn colSpan="4" ></TableRowColumn>
        <TableRowColumn>
          <span className = "totalValue"><b>Total: {props.totalCart}$</b></span>
        </TableRowColumn>
      </TableRow>
    </TableFooter>
  </Table>

}


export default CartList;
