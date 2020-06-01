import React, { useState, useEffect } from 'react';

const API_URL = "http://elisemdesign.no/project-exam-2-master/get-enquiries.php";

export default function EnquiryList() {
    const [enquiries, setEnquiries] = useState([]);
    useEffect(() => {
        fetch(API_URL)
        .then(response => response.json())
        .then((json) => {
            setEnquiries(json);
        })
        .catch(() => {
            console.log("Noe gikk galt");
        })
    },[]);

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
