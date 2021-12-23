import React, {useState,useEffect} from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import axios from "axios";
import Item from "../manifest/item";


const CatManifest = () => {

    const [items, setItems] = useState([])

    const estate = useSelector(state => state.estate);
    const category = useSelector(state => state.category);
    const ip = useSelector(state => state.ip);

    
        useEffect(() => {
        if ((category != "All") && (category!= null)) {
            let req = "http://" + ip + ":9002/getitemsbycat";
            axios.post(req, {
                estateid: estate.estateid,
                category: category
            })
                .then(response => {
                    setItems(response.data)
                    
                })
                .catch(error => console.error(error));
            }
        else {
            let req = "http://" + ip + ":9002/getitems";
            axios.post(req, {
            estateid: estate.estateid,
        })
            .then(response => {
                setItems(response.data)
                
            })
            .catch(error => console.error(error));
        }
        });
            


    

    return(
        <div className="container">
        <div className ="row">
            {
                items.map(item => <Item data={item} />)
            }
        </div>
    </div>
    )
}
export default CatManifest;