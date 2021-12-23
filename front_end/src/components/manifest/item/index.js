
  
import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  useNavigate,
  Link,
  Navigate
} from "react-router-dom";


const Item = (props) => {

    const data = props.data;

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const ip = useSelector(state => state.ip);

    const categoryState = (a) => {
        dispatch({type: "setCategory", payload:a})
    };

    const itemState = (b) => {
        dispatch({type: "setItemFile", payload:b})
    };

    function onClickHandlerCat(event) {
      categoryState(data.category)
      navigate("/catmanifest")

    }

    function onClickHandlerItem(event) {
      itemState(data)
      navigate("/item")
    }

    function onClickHandler(event) {
        let req = "http://" + ip + ":9002/deleteitem";
        axios.post("http://" + ip + ":9002/deleteitem", {
            id: data.id,
            estateid: data.estateid,
            lotno: data.lotno,
            imagepath: data.imagepath,
            description: data.description,
            category: data.category,
            price: data.price,
            quantity: data.quantity
    })
        .then(response => {
            console.log(response.data)
        })
        .catch(error => console.error(error));

    }

    return(
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <center><img src = {data.imagepath}  style ={{height: 100, width:100}}/></center>
              <a onClick={onClickHandlerCat}><h5 class="card-title text-secondary">{data.category}</h5></a>
              <p>{"Value: \n" + data.price} </p>
              <p>{"Quantity: " + data.quantity} </p>
              <p>{"Lot No.: " + data.lotno} </p>
              <a class="card-text text-secondary" onClick={onClickHandlerItem}>{data.description}</a>
              <p>&nbsp;</p>
              <center><button class="bg-danger" onClick={onClickHandler}><b>Remove</b></button></center>
            </div>
          </div>
        </div>)
}
export default Item;