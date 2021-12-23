import React, {useState,useEffect} from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import axios from "axios";
import Item from "../manifest/item";
import SubCat from "./categories";


const Manifest = () => {

    var cats = [];

    const [items, setItems] = useState([])

    const estate = useSelector(state => state.estate);
    const ip = useSelector(state => state.ip);


    useEffect(() => {
        let req = "http://" + ip + ":9002/getitems";
        axios.post(req, {
            estateid: estate.estateid
        })
            .then(response => {
                setItems(response.data)
                
            })
            .catch(error => console.error(error));
    });

    

    for (var item of items) {
        if (!cats.includes(item.category)) {
            cats.push(item.category)
        }
    }

    cats.sort();
    cats.unshift("All")
    

    return(
        <div className = "container">
        <ul className="list-group">
        <div>
            <li className="list-group-item">Categories:</li>
        </div>
            
            {
                cats.map(subcat => <SubCat data ={subcat} />)

            }
            
        </ul>
        </div>
    )
}
export default Manifest;