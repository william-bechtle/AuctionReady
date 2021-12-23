import React from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';


const SubCat = (props) => {
    const dispatch = useDispatch();

    const categoryState = (a) => {
        dispatch({type: "setCategory", payload:a})
    };

    function onClickHandler(event) {
        categoryState(props.data)
    }
    return(
    <div>
    <a className="list-group-item text-primary" onClick={onClickHandler}>{props.data}</a>
    </div>
    )

}
export default SubCat;