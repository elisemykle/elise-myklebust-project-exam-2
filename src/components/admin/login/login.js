import React from 'react';
import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import * as yup from "yup";
import Hero from "../../Hero.js";

const schema = yup.object().shape({
	firstname: yup
        .string()
		.required()
		.min(2, "Required, minimum 2 characters"),
	lastname: yup
        .string()
		.required()
		.min(2, "Required, minimum 2 characters"),
	emailadress: yup
		.string()
		.required()
		.min("Required, must be in a valid email format"),
	message: yup
		.string()
		.required()
		.min(10, "Required, minimum 10 characters"),
});

 export default function Login(props){
    const { register, handleSubmit, errors } = useForm({
        validationSchema: schema
    });
    function onSubmit() {
    }
    return(
        <Form className="page" onSubmit={handleSubmit(onSubmit)}>
            <Form.Group>
                <Hero title="Login" text="" classes="hero hero--login" showSearch={false}/>
                <div className="login__form--page">
                    <h1 className="login--h1">Welcome back, Elise.</h1>
                </div>
                <Form.Label className="form__label">Email address</Form.Label>
                <Form.Control name="emailaddress" placeholder="Example@example.com" ref={register}/>
                {errors.firstname && <p className="error--message">Please enter minimum 2 characters.</p>}
            </Form.Group>

            <Form.Group>
                <Form.Label className="form__label">Password</Form.Label>
                <Form.Control name="lastname" placeholder="Please enter your password" ref={register}/>
                {errors.lastname && <p className="error--message">Please enter minimum 2 characters.</p>}
            </Form.Group>
            <Button className="contact--button" type="submit">Login</Button>
        </Form>
        )
}
