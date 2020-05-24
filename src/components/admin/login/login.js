import React from 'react';
import { useForm } from "react-hook-form";
import Hero from "../../Hero.js";

 export default function Login(props){
    function onSubmit() {
    }
    return(
		<div className="page">
			<Hero title="Login" text="" classes="hero hero--login" showSearch={false}/>
				<div className="login__form--page">
					<h1 className="login--h1">Login</h1>
				</div>
        <form onSubmit={() => onSubmit}>
            <div className="login__form-group">
                <label className="form__label">Username</label>
                <input className="form__control" name="emailaddress" placeholder="Please enter your username" />
            </div>

            <div className="login__form-group">
                <label className="form__label">Password</label>
					<input className="form--input" type="password" name="pwd" placeholder="Please enter your password" />
            	</div>
            	<button className="login__button" type="submit">Login</button>
				</form>
        	</div>
        )
}
