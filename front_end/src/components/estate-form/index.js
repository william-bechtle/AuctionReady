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

const EstateForm = () => {

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
      userid : estate.value
    }
    let req = "http://" + ip + ":9002/getestate";
      axios.post(req, estateDB)
      .then(response => {
          console.log(response)
          if (response.data != "") {
            estateLot(response.data)
            req = "http://" + ip + ":9002/owners";
            axios.post(req, {
              id: user.id,
              estate: response.data.estateid,
              firstname: user.firstname,
              name: user.name,
              password: user.password,
              username: user.username
            })
            .then(res => {
                console.log(res)
                
            })
            .catch(error => console.error(error));
            navigate("/fullmanifest")
          }
          else {
            alert("NO ESTATE OR USER FOUND")
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
                  <label htmlFor="">Enter User's ID To Get Estate</label>
                  <input
                    type="text"
                    className="form-control"
                    name="estate"
                  />
                </div>
                <input
                  type="submit"
                  value="Go To Estate"
                  className="btn btn-dark btn-block"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    )
}
export default EstateForm;