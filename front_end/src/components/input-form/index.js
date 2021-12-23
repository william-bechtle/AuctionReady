import React from "react";
import './style.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  useNavigate,
  Link,
  Navigate
} from "react-router-dom";



const InputForm = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    var b = useSelector(state => state.item);

    const ip = useSelector(state => state.ip);

    const estate = useSelector(state => state.estate);

    const clearItemState = () => {
        dispatch({type: "clearItemFile"})
      };

    const handleGoBack = () => {
        dispatch({ type: 'setGoBack', payload:1})
    }

    function onClickHandle(event){
        event.preventDefault();
        navigate("/fullmanifest")
    }

    function onFormSubmit(event){
        event.preventDefault()
        const form = document.getElementById("form");
        const {lotno,category,numitems,description,estvalue}= form.elements;
        let c = "/images/" + b;
        let req = "http://" + ip + ":9002/item";
        axios.post(req, {
            estateid: estate.estateid,
            lotno: lotno.value,
            imagepath: c,
            description: description.value,
            category: category.value,
            price: estvalue.value,
            quantity: numitems.value
    })
        .then(response => {
            console.log(response.data)
            clearItemState();
        })
        .catch(error => console.error(error));
        Array.from(event.target).forEach((e) => (e.value = ""));
        handleGoBack();
        navigate("/fullmanifest")
    }

    return (
        <div className="wrapper">
        <form onSubmit={onFormSubmit} id="form">
            <div className="form-row" style={{margin: 'auto'}}>
                <div className="form-group col-sm-4" style={{width: '70px'}}>
                    <label for="lotno">Lot No.</label>
                    <input type="text" className="form-control" name="lotno" id="lotno" />
                </div>
                <div className="form-group col-sm-4" style={{width: '215px'}}>
                    <label for="category">Category</label>
                    <input type="text" className="form-control" name="category" id="category" />
                </div>
                <div className="form-group col-sm-4" style={{width: '85px'}}>
                    <label for="numitems">No. Items</label>
                    <input type="number" className="form-control" name="numitems" id="numitems" />
                </div>
            </div>
            <div className="form-row" style={{margin: 'auto'}}>
                <div className="form-group col-sm-12" style={{width: '394px'}}>
                        <label for="description">Description</label>
                        <input type="textarea" className="form-control" id="description" style={{height: '80px', marginBottom: '0px'}} />
                </div>
            </div>

            <div className="form-row" style={{margin: 'auto'}}>
                <div className="form-group col-sm-12 text-center">
                    <label for="estvalue">Value/Range</label>
                    <input type="text" name="estvalue" id="estvalue" className="form-control" style={{width: '200px', margin: 'auto', marginTop: '0px'}} />
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-sm-6" style={{width: '185px', margin: 'auto'}}>
                    <button type="submit" className="btn btn-dark btn-block">Catalog</button>
                </div>
                <div className="form-group col-sm-6" style={{width: '185px', margin: 'auto'}}>
                    <button type="button" className="btn btn-danger btn-block" onClick={onClickHandle}>Cancel</button>
                </div>
            </div>
            
        </form>
        </div>
    )
}
export default InputForm;