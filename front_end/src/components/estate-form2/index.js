import React from "react";
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

const EstateForm2 = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();


  const user = useSelector(state => state.user);

  const ip = useSelector(state => state.ip);

  const estateLot = (b) => {
    console.log(b)
    dispatch({type: "setEstate", payload:b})
  };

  function onFormSubmit(event) {
    event.preventDefault()
    const form = document.getElementById("form");
    console.log(form.elements)
    const {estate} = form.elements;
    console.log(estate.value)
    const estateDB = {
      userid : user.id,
      estatename: estate.value
    }
    let req = "http://" + ip + ":9002/estate";
      axios.post(req, estateDB)
      .then(response => {
          console.log(response)
          estateLot(response.data)
          if (response.data != "") {
            navigate("/fullmanifest")
          }
          
      })
      .catch(error => console.error(error));

  }

    return(
        <div className>
        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-6">
            <div className="wrapper">
            <small className="text-danger" style={{ color: "#ffffff" }}>{ "" }</small>
              <form onSubmit={onFormSubmit} id="form"> 
                <div className="form-group">
                  <label htmlFor="">Register Estate</label>
                  <input
                    type="text"
                    className="form-control"
                    name="estate"
                  />
                </div>
                <input
                  type="submit"
                  value="Register"
                  className="btn btn-dark btn-block"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    )
}
export default EstateForm2;