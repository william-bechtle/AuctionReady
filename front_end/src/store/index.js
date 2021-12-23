import { useReducer } from "react";
import { createStore } from "redux";

// initial state
const initialState = {
    image: null,
    user: null,
    estate: null,
    item: null,
    category: null,
    goback: null,
    ip:null
}

// reducer
const formReducer = (state = initialState, action) => {
    if (action.type === "handleCapture") {
        return {
            image: action.payload[0],
            user: state.user,
            estate : state.estate,
            item : state.item,
            category: state.category,
            goback: state.goback,
            ip: state.ip

        }
    } else if (action.type === "clearStateImage") {
        return {
            image: null,
            user: state.user,
            estate : state.estate,
            item : state.item,
            category: state.category,
            goback : state.goback,
            ip: state.ip
        }
    } else if (action.type === "login") {
        return {
            image: state.image,
            user: action.payload,
            estate : state.estate,
            item : state.item,
            category: state.category,
            goback : state.goback,
            ip: state.ip
        }
    } else if (action.type === "logout") {
        return {
            image: null,
            user: null,
            estate : null,
            item : null,
            category: null,
            goback : null,
            ip: null
        }
    } else if (action.type === "setEstate") {
        console.log(action.payload)
        return {
            image: state.image,
            user: state.user,
            estate : action.payload,
            item : state.item,
            category: state.category,
            goback : state.goback,
            ip: state.ip
        }
    } else if (action.type === "setItemFile") {
        console.log(action.payload)
        return {
            image: state.image,
            user: state.user,
            estate : state.estate,
            item : action.payload,
            category: state.category,
            goback : state.goback,
            ip: state.ip
        }
    } else if (action.type === "clearItemFile") {
        console.log(action.payload)
        return {
            image: state.image,
            user: state.user,
            estate : state.estate,
            item : null,
            category: state.category,
            goback : state.goback,
            ip: state.ip
        }
    } else if (action.type === "setCategory") {
        console.log(action.payload)
        return {
            image: state.image,
            user: state.user,
            estate : state.estate,
            category : action.payload,
            item : state.item,
            goback : state.goback,
            ip: state.ip
        }
    } else if (action.type === "setGoBack") {
        console.log(action.payload)
        return {
            image: state.image,
            user: state.user,
            estate : state.estate,
            category : state.category,
            item : state.item,
            goback : action.payload,
            ip: state.ip
        }
    } else if (action.type === "clearGoBack") {
        console.log(action.payload)
        return {
            image: state.image,
            user: state.user,
            estate : state.estate,
            category : state.category,
            item : state.item,
            goback : null,
            ip: state.ip
        }
    } 
    else if (action.type === "setIP") {
        console.log(action.payload)
        return {
            image: state.image,
            user: state.user,
            estate : state.estate,
            category : state.category,
            item : state.item,
            goback : state.goback,
            ip: action.payload
        }
    }
    else {
        return {
            state,
        }
    }
};

const store = createStore(formReducer)

export default store;