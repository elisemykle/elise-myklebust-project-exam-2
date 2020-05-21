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


export default function Enquiry(props){
    const { register, handleSubmit, errors } = useForm({
        validationSchema: schema
    });
    function onSubmit() {
    }
    return(
        <Form className="contact--form" onSubmit={handleSubmit(onSubmit)}>
            <Form.Group>
                <Hero title="Enquiry" text="" classes="hero hero--contact" showSearch={false}/>
                <div className="contact__contact--page">
                    <h1 className="contact--h1">Make your reservation</h1>
                </div>
                <Form.Label className="form--label">Establishment:</Form.Label>
                <Form.Control className="form--input" name="firstname" placeholder="Enter your first name" ref={register}/>
                {errors.firstname && <p className="error__message">Please enter minimum 2 characters.</p>}
            </Form.Group>
            <Form.Group>
                <Form.Label className="form--label">Full name</Form.Label>
                <Form.Control className="form--input" name="lastname" placeholder="Enter your last name" ref={register}/>
                {errors.lastname && <p className="error__message">Please enter minimum 2 characters.</p>}
            </Form.Group>
			<Form.Group>
                <Form.Label className="form--label">Email adress</Form.Label>
                <Form.Control className="form--input" name="emailadress" placeholder="Example@example.com" ref={register}/>
                {errors.emailadress && <p className="error__message">Please enter in a valid email format.</p>}
            </Form.Group>
            <Form.Group>
                <Form.Label className="form--label">Check-in:</Form.Label>
                <Form.Control className="form--input" name="emailadress" placeholder="dd.mm.åååå" ref={register}/>
                {errors.emailadress && <p className="error__message">Please enter in a valid email format.</p>}
            </Form.Group>
            <Form.Group>
                <Form.Label className="form--label">Check-out:</Form.Label>
                <Form.Control className="form--input" name="emailadress" placeholder="dd.mm.åååå" ref={register}/>
                {errors.emailadress && <p className="error__message">Please enter in a valid email format.</p>}
            </Form.Group>
            <Button className="contact--button" type="submit">Send</Button>
        </Form>
        )
}
