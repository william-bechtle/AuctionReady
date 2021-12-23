import React from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import axios from "axios";



const EstateBanner = () => {

    const estate = useSelector(state => state.estate);

    const ip = useSelector(state => state.ip);

    
    let req = "http://" + ip + ":9002/getitems";

    axios.post(req, {
        estateid: estate.estateid
    })
        .then(response => {
            console.log(response.data)
            
        })
        .catch(error => console.error(error));


    return(
        <div className="jumbotron text-center">
        <h1>{"Estate: " + estate.estatename}</h1>
        <p className="lead">
            Manage Your Auction
        </p>
    
        </div>
    )
}
export default EstateBanner;