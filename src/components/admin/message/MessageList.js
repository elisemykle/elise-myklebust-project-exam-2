import React, { useState, useEffect } from 'react';

const API_URL = "http://elisemdesign.no/project-exam-2-master/get-contacts.php";

export default function Message() {
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        fetch(API_URL)
        .then(response => response.json())
        .then((json) => {
            setMessages(json);
        })
        .catch(() => {
            console.log("Noe gikk galt");
        })
    },[]);
    return (
        <div className="messages">
        <h1 className="messages__h1">Messages from customers</h1>
        {
            messages.map((message, index) =>
            <div key={index}> <p className="message__text">{message.message} {message.clientName}</p></div>
        )
    }
    </div>
)
}
