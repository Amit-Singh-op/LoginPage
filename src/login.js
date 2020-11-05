import React from 'react'
import "./login.css";
export default function Login() {
    return (
        <div className="login">
            <form class="inside">
               <h1>Login Page</h1>
              <input placeholder="Enter Email" type="text"/>
              <input placeholder="Enter Password" type="password" />
              <button type="submit">Submit</button>
              </form>
        </div>
    )
}
