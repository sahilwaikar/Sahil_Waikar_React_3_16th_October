import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToken } from "../redux/tokenSlice";
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useNavigate } from "react-router-dom";
import "../style/signup.css";

const Signup = () => {
    const userLogin = useSelector((state) => state.tokens);
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [password, setPassword] = useState('');

    const generateRandomString = (myLength) => {
        const chars =
            "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890";
        const randomArray = Array.from(
            { length: myLength },
            (v, k) => chars[Math.floor(Math.random() * chars.length)]
        );

        const randomString = randomArray.join("");
        return randomString;
    };

    const dispatch = useDispatch();
    function addUserLoginData() {
        let userToAdd = {
            Token: (generateRandomString(16)),
            Name: username,
            Email: userEmail,
            Password: password,
        };
        dispatch(addToken(userToAdd));
    };
    if (userLogin.length == 0) {
        return (

            <div className="signup_div">

                <div className='inner_div'>
                    <h2>Sign Up</h2>
                    <label htmlFor="user_name">Name</label>
                    <input id='user_name' onChange={(event) => { setUsername(event.target.value) }}></input>
                    <label htmlFor="user_email">Email</label>
                    <input id='user_email' onChange={(event) => { setUserEmail(event.target.value) }}></input>
                    <label htmlFor="user_pass">Password</label>
                    <input id='user_pass' onChange={(event) => { setPassword(event.target.value) }}></input>
                    <button onClick={() => {
                        if (document.getElementById('user_name').value.length != 0 && document.getElementById('user_email').value.length != 0 && document.getElementById('user_pass').value.length != 0) {
                            addUserLoginData()
                            if (window.confirm('Click here to go to login page')) {
                                navigate("/login");
                            };
                        }
                        else {
                            alert('not');
                        }
                    }}>Submit</button>
                </div>
            </div>
        )
    }
    else {
        <div>
            <h2>You have already logged in!</h2>
            <button onClick={() => {
                navigate("/login");
            }}>Sign up</button>
        </div>
    }

}

export default Signup;