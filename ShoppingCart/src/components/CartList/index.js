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

      {Object.keys(props.cartList).map((idProduct, index) => {
          let discountText = (props.products[idProduct].discount !== 0) ? props.discountList[idProduct][0] : "";
          let discountValue = (props.products[idProduct].discount !== 0) ? props.discountList[idProduct][1] : 0;
          return <TableRow key={index} rowNumber = {parseInt(idProduct,0)}>
            <TableRowColumn>{props.products[idProduct].title}</TableRowColumn>
            <TableRowColumn>{props.cartList[idProduct]}</TableRowColumn>
            <TableRowColumn>{props.products[idProduct].price}</TableRowColumn>
            <TableRowColumn>{discountText}</TableRowColumn>
            <TableRowColumn>{props.products[idProduct].price * props.cartList[idProduct] - (props.products[idProduct].price * props.cartList[idProduct] * discountValue)}</TableRowColumn>
            <TableHeaderColumn><IconButton><DeleteIcon color="black" onClick = {()=>props.deleteFromCart(idProduct)}/></IconButton></TableHeaderColumn>
          </TableRow>;
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
