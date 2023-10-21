import '../style/login.css'
import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { removeToken } from "../redux/tokenSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const userLogin = useSelector((state) => state.tokens);
    const dispatch = useDispatch();
    const navi = useNavigate();

    function logout() {
        navi("/");
        dispatch(removeToken())
    };
    function Signup() {
        navi("/");
    }

    if (userLogin.length != 0) {
        return (
            <div className='logindiv'>
                <div className='login_inner'>
                    <h2>Hi, <span>{userLogin[0].Name} you have successfully logged in!</span></h2>
                    <button onClick={() => {
                        logout()
                    }}>Logout</button>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className='logindiv'>
                <div className='login_inner'>
                    <h2>Sorry you have not logged in!</h2>
                    <button onClick={() => {
                        Signup()
                    }}>Sign up</button>
                </div>
            </div>
        )
    }
}

export default Login;