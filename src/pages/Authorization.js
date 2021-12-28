import React, {useRef} from "react";
import { Link } from "react-router-dom";
import {useDispatch} from "react-redux";
import {doLogin, getUsers} from "../actions/login"
import "../App.css";


const Authorization = ()=>{

    const usernameRef = useRef(null);
    const passwordRef = useRef(null);

    const dispatch = useDispatch();


    const handleLogin = ()=>{

        dispatch(doLogin(usernameRef.current.value, passwordRef.current.value ))

    }


    const handleUsers = ()=>{

        dispatch(getUsers());

    }


    return(

        <div className="registration">
            <div>Authorization</div>

            <label htmlFor="username">Username:</label>
            <input  id="username" ref={usernameRef}/>
            <label htmlFor="password">Password:</label>
            <input  id="password" ref={passwordRef} />

            <button onClick={handleLogin}>Log in</button>
            <button onClick={handleUsers}>Users</button>

            <Link to="/">Go Home</Link>
        </div>
    )


}


export default Authorization;