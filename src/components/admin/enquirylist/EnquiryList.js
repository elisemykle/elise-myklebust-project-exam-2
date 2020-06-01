import React, { useState, useEffect } from 'react';

/* API call som henter informasjonen fra en url-kobling */
const API_URL = "http://elisemdesign.no/project-exam-2-master/get-enquiries.php";


export default function EnquiryList() {
    const [enquiries, setEnquiries] = useState([]);
    useEffect(() => {
        fetch(API_URL)
        .then(response => response.json())
        .then((json) => {
            setEnquiries(json);
        })
        /* Catch funksjonen lar deg generere tilpassendes feilmeldinger om noe skulle gå galt*/
        .catch(() => {
            console.log("Noe gikk galt");
        })
    },[]);

    /* Alt inn i return er "designet" som forteller hva som skal displaye på nettsiden */
    return (
        <div className="enquirylist">
        <h1 className="enquirylist__h1">Enquiry from customers</h1>
        {
            enquiries.map((enquiry, index) =>
            <div key={index}> <p className="enquiry__list--text"> {enquiry.establishment} {enquiry.clientName} {enquiry.email}
            {enquiry.checkin} {enquiry.checkout}</p></div>
        )
    }
    </div>
)
}
