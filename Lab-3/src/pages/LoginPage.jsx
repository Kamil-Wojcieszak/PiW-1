// app.js

import React, {useState, useEffect} from 'react';
import {googleLogout, useGoogleLogin} from '@react-oauth/google';
import axios from 'axios';

function LoginPage() {
    const [user, setUser] = useState([]);
    const [profile, setProfile] = useState([]);

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse), onError: (error) => console.log('Login Failed:', error)
    });

    useEffect(() => {
        if (user) {
            axios
                .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                    headers: {
                        Authorization: `Bearer ${user.access_token}`, Accept: 'application/json'
                    }
                })
                .then((res) => {
                    setProfile(res.data);
                })
                .catch((err) => console.log(err));
        }
    }, [user]);

    // log out function to log the user out of google and set the profile array to null
    const logOut = () => {
        googleLogout();
        setProfile([]);
    };

    return (
        <div>
            <h2>React Login</h2>
            {profile.email != null ? (
                <div>
                    <img src={profile.picture} alt="user image"/>
                    <h3>User Logged in</h3>
                    <p>Name: {profile.name}</p>
                    <p>Email Address: {profile.email}</p>
                    <br/>
                    <br/>
                    <button onClick={logOut}>Log out</button>
                </div>
            ) : (
                <div>
                    <div className="screen-1">
                        <div className="email">
                            <label htmlFor="email">Email Address</label>
                            <div className="sec-2">
                                <ion-icon name="mail-outline"></ion-icon>
                                <input type="email" name="email" placeholder="Username@gmail.com"/>
                            </div>
                        </div>
                        <div className="password">
                            <label htmlFor="password">Password</label>
                            <div className="sec-2">
                                <ion-icon name="lock-closed-outline"></ion-icon>
                                <input className="pas" type="password" name="password" placeholder="············"/>
                                <ion-icon className="show-hide" name="eye-outline"></ion-icon>
                            </div>
                        </div>
                        <button className="login">Login</button>
                        <div className="footer"><span>Signup</span><span>Forgot Password?</span><span>Login using:                     <button className={"btn btn-danger"}
                            onClick={() => login()}>  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                           fill="currentColor" className="bi bi-google"
                                                           viewBox="0 0 16 16">
  <path
      d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z"/>
</svg></button></span></div>
                    </div>
                </div>
            )}
        </div>

    );
}

export default LoginPage;