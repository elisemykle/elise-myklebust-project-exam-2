import React, { useState, useEffect } from 'react';

/* API call som henter informasjonen fra en url-kobling */
const API_URL = "http://elisemdesign.no/project-exam-2-master/get-contacts.php";


export default function Message() {
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        fetch(API_URL)
        .then(response => response.json())
        .then((json) => {
            setMessages(json);
        })
        /* Catch funksjonen lar deg generere tilpassendes feilmeldinger om noe skulle gå galt*/
        .catch(() => {
            console.log("Noe gikk galt");
        })
    },[]);
    /* Alt inn i return er "designet" som forteller hva som skal displaye på nettsiden */
    return (
        <div className="messages">
            <div className="messages__list">
                <h1 className="messages__h1">Messages from customers</h1>
                {
                    messages.map((message, index) =>
                    <div key={index}>
                        <p className="message__clientname">{message.clientName}</p>
                        <a href="mailto:{this.props.email}" className="message__email">{message.email}</a>
                        <p className="message__text">{message.message}</p>
                    </div>
                )
            }
        </div>
    </div>
)
}
