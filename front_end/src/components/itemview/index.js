import React from "react";
import axios from "axios";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  useNavigate,
  Link,
  Navigate
} from "react-router-dom";


const Item2 = () => {

    console.log(data)

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const data = useSelector(state => state.item);

    const ip = useSelector(state => state.ip);

    const categoryState = (a) => {
        dispatch({type: "setCategory", payload:a})
    };

    const itemState = () => {
        dispatch({type: "clearItemFile"})
    };

    function onClickHandler(event) {
      let req = "http://" + ip + ":9002/deleteitem";
        axios.post(req, {
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
        itemState();
        navigate("/fullmanifest")
    }

    function onClickHandlerCat(event) {
      categoryState(data.category)
      navigate("/catmanifest")

    }

    function onClickHandler2(event) {
        itemState()
        navigate("/fullmanifest")
      }

    return(
        <div class="row">
            <div class="col-sm-2">

            </div>
            <div class="col-sm-8">
          <div class="card">
              <center>
            <div class="card-body">
              <img src = {data.imagepath}  style ={{height: 400, width:400}}/>
              <a onClick={onClickHandlerCat}><h5 class="card-title text-secondary">{data.category}</h5></a>
              <p>{"Value: \n" + data.price} </p>
              <p>{"Quantity: " + data.quantity} </p>
              <p>{"Lot No.: " + data.lotno} </p>
              <p class="card-text">{data.description}</p>
              <p>&nbsp;</p>
              <center><button class="btn btn-danger" onClick={onClickHandler}><b>Remove</b></button></center>
              <p>&nbsp;</p>
              <center><button class="btn btn-dark" onClick={onClickHandler2}><b>Done</b></button></center>
            </div>
            </center>
          </div>
          </div>
          <div class="col-sm-2">

            </div>
          </div>)
}
export default Item2;