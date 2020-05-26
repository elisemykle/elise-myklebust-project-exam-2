import React, { useState} from 'react';
import Hero from "../../Hero.js";
import { useHistory } from 'react-router-dom';

 export default function Login(props){
	const history = useHistory();

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(false);

    function onSubmit(e) {
		e.preventDefault();
		if(username === "Admin" && password === "Admin123"){
			localStorage.setItem("username", username);
			localStorage.setItem("password", password);
			history.push("/Hotels");
		}
		else{
			setError(true);
		}

    }
    return(
		<div className="Login__page">
			<Hero title="Login" text="" classes="hero hero--login" showSearch={false}/>
				<div className="login__form--page">
					<h1 className="login__h1">Welcome back</h1>
				</div>
        <form onSubmit={(event) => onSubmit(event)}>
            <div className="login__form-group">
                <label className="form__label">Username</label>
                <input className="form__control" name="emailaddress" placeholder="Please enter your username" onChange={event =>
						{
							setUsername(event.target.value);
							setError(false);
						}

						} />

            </div>

            <div className="login__form-group">
                <label className="form__label">Password</label>
					<input className="form--input" type="password" name="pwd" placeholder="Please enter your password" onChange={event =>
							{
								setPassword(event.target.value);
								setError(false);
							}

							} />
            	</div>
					<button className="login__button" type="submit">Login</button>
					{
						(error) &&
						<p className="login__error">Wrong password or username. Try signing in again.</p>
					}
				</form>
        	</div>
        )
}
