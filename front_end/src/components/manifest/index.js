import React, {useState,useEffect} from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import axios from "axios";
import Item from "./item";
import {
    BrowserRouter as Router,
    Route,
    useNavigate,
    Link,
    Navigate
  } from "react-router-dom";


const Manifest = React.forwardRef(( props, ref ) => {

    const [items, setItems] = useState([])

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const estate = useSelector(state => state.estate);

    const goback = useSelector(state => state.goback);

    const ip = useSelector(state => state.ip);

    const handleGoBack = () => {
        dispatch({ type: 'clearGoBack'})
    }


    useEffect(() => {
        if (goback == 1){
            handleGoBack();
            navigate("/capturepage")
        }
        let req = "http://" + ip + ":9002/getitems";
        axios.post(req, {
            estateid: estate.estateid
        })
            .then(response => {
                setItems(response.data)
                
            })
            .catch(error => console.error(error));
    });

    

    return(
        <div className="container"  ref={ ref }>
        <div className ="row">
            {
                items.map(item => <Item data={item} />)
            }
        </div>
    </div>
    )
});
export default Manifest;