import React from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import axios from "axios";



const EstateBanner2 = () => {

    const estate = useSelector(state => state.estate);
    const category = useSelector(state => state.category);

    let cat = category;

    if (cat==null){
        cat="All"
    } 


    return(
        <div className="jumbotron text-center">
        <h1>{"Estate: " + estate.estatename}</h1>
        <p className="lead">
            {"Category: " + cat}
        </p>
    
        </div>
    )
}
export default EstateBanner2;