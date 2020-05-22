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

 export default function Contact(props){
    const { register, handleSubmit, errors } = useForm({
        validationSchema: schema
    });
    function onSubmit() {
    }
    return(
        <Form className="contact--form" onSubmit={handleSubmit(onSubmit)}>
            <Form.Group>
                <Hero title="Contact us" text="" classes="hero hero--contact" showSearch={false}/>
                <div className="contact__contact--page">
                    <h1 className="contact--h1">Any questions ?</h1>
					<p className="contact__text">Get in touch with our turist agency by completing the form down below. Providing you have any questions don’t hesitate to contact our team. We are always here to answer your questions.
					</p>
                </div>
                <Form.Label className="form--label">First name</Form.Label>
                <Form.Control className="form--input" name="firstname" placeholder="Enter your first name" ref={register}/>
                {errors.firstname && <p className="error__message">Please enter minimum 2 characters.</p>}
            </Form.Group>
            <Form.Group>
                <Form.Label className="form--label">Last name</Form.Label>
                <Form.Control className="form--input" name="lastname" placeholder="Enter your last name" ref={register}/>
                {errors.lastname && <p className="error__message">Please enter minimum 2 characters.</p>}
            </Form.Group>
			<Form.Group>
                <Form.Label className="form--label">Email adress</Form.Label>
                <Form.Control className="form--input" name="emailadress" placeholder="Example@example.com" ref={register}/>
                {errors.emailadress && <p className="error__message">Please enter in a valid email format.</p>}
            </Form.Group>
			<Form.Group>
				<Form.Label className="form--label">Message</Form.Label>
				<Form.Control className="message--input" as="textarea" name="message" placeholder="Please enter your message here..." ref={register}/>
				{errors.message && <p className="error__message">Please enter in minimum 10 characters.</p>}
			</Form.Group>
            <Button className="contact--button" type="submit">Submit</Button>
        </Form>
        )
}
