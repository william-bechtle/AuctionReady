import "./style.css";
import React from "react";
import axios from "axios";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  useNavigate,
  Link,
  Navigate
} from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  dispatch({type: "logout"});

  const loginState = (a) => {
    console.log(a);
    dispatch({type: "login", payload:a})
    
  };

  const estateLot = (b) => {
    console.log(b)
    dispatch({type: "setEstate", payload:b})
  };

  const setIP = (ip) => {
    console.log(ip)
    dispatch({type: "setIP", payload:ip})
  };

  function onFormSubmit(event) {
    event.preventDefault()
    const form = document.getElementById("form");
    const {username,password,IP}= form.elements;
    const ipaddr = IP.value;
    setIP(ipaddr);
    console.log(form.elements);
    const a = {username: username.value, password: password.value }
    console.log(username.value,password.value);
    let req = "http://" + ipaddr + ":9002/ownersverify";
    if (ipaddr ==""){
      alert("PLEASE ENTER IP. THIS ALLOWS REQUESTS TO SERVERS TO EASILY HAPPEN");
      navigate("/")
    }
    console.log(req) 
    axios.post(req, {
        username : username.value,
        password : password.value
      })
    .then( res => {
      console.log( 'Axios response: ', res.data );
      if (res.data == "") {
        alert("INVALID CREDENTIALS");
        navigate("/")
      }
      else {
        console.log(res.data)
        loginState(res.data);
        console.log(res.data)
        if (res.data.username == "auctioneer") {
        req = "http://" + ipaddr + ":9002/getestatebyestate";
        axios.post(req, {
        estateid: res.data.estate
      })
    .then( res2 => {
      console.log( 'Axios response: ', res2.data );
      if (res2.data=="") {
        navigate("/estate")
      }
      else {
        estateLot(res2.data);
        navigate("/fullmanifest")
      }
    }, (error) => {
      console.error(error);
    })
    .catch(error => console.error(error))
    }
    else {
      req = "http://" + ipaddr + ":9002/getestate";
      axios.post(req, {
      userid: res.data.id
    })
  .then( res2 => {
    console.log( 'Axios response: ', res2.data );
    if (res2.data=="") {
      navigate("/estate2")
    }
    else {
      estateLot(res2.data);
      navigate("/fullmanifest")
    }
  }, (error) => {
    console.error(error);
  })
  .catch(error => console.error(error))
    }
  
  }}, (error) => {
      console.error(error);
    })
    .catch(error => console.error(error))
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
                  <label htmlFor="">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                  />
                </div>
  
                <div className="form-group">
                  <label htmlFor="">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="">IP</label>
                  <input
                    type="text"
                    className="form-control"
                    name="IP"
                  />
                </div>
  
                <input
                  type="submit"
                  value="Login"
                  className="btn btn-dark btn-block"
                />
              </form>
            </div>
    
          </div>
        </div>
      </div>
    )
}
export default Login;