import React, { useState} from 'react';
import Hero from "../../Hero.js";
import { useHistory } from 'react-router-dom';

// Login komponenten
export default function Login(props){
    // States
    const history = useHistory();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    /* Onsubit funksjonen er en hendelse som oppstår når man prøver å sende inn et skjema. Hvis funksjonen returnerer riktig, blir skjemaet sendt inn, ellers sender den ikke dataene. */
    function onSubmit(e) {
        e.preventDefault();/* e.preventDefault sjekker om passordet stemmer med en if/else statement. Om username og password er korrekt så vil man bli sendt videre til Admin. Visst det ikke stemmer så vil man ikke bli sendt videre. */
        if(username === "Admin" && password === "Admin"){
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
            history.push("/Admin");
        }
        else{
            setError(true);
        }

    }
    /* Alt inn i return er "designet" som forteller hva som skal displaye på nettsiden */
    return(
        <div className="login__page">
            <Hero title="Login" text="" classes="hero hero--login" showSearch={false}/>
            <div className="login__form--page">
                <h1 className="login__h1">Welcome back</h1>
            </div>
            <form className="row row--login login__form" onSubmit={(event) => onSubmit(event)}>
                <div className="col-12">
                    <div className="login__form-group">
                        <label className="form__label--login">Username</label>
                        <input className="form__input--login" name="emailaddress" placeholder="Please enter your username" onChange={event =>
                                {
                                    setUsername(event.target.value);
                                    setError(false);
                                }

                            } />
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="login__form-group">
                            <label className="form__label--login">Password</label>
                            <input className="form__input--login" type="password" name="pwd" placeholder="Please enter your password" onChange={event =>
                                    {
                                        setPassword(event.target.value);
                                        setError(false);
                                    }

                                } />
                            </div>
                        </div>
                        <div className="col-12">
                            <button className="login__button" type="submit">Login</button>
                        </div>
                        {
                            (error) &&
                            <p className="login__error">Wrong password or username. Try signing in again.</p>
                        }
                    </form>
                </div>
            )
        }
