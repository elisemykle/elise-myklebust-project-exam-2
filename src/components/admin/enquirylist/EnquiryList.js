import React, { useState, useEffect } from 'react';

const API_URL = "http://elisemdesign.no/project-exam-2-master/get-enquiries.php";

export default function EnquiryList() {
    const [enquiries, setEnquiries] = useState([]);
    useEffect(() => {
        fetch(API_URL)
            .then(response => response.json())
            .then(setEnquiries);
    },[]);
    return (
        <div className="enquirylist">
        <h1 className="enquirylist__h1">Enquiry from customers</h1>
        {
            enquiries.map((enquiry, index) =>
            <h1 key={index}> {enquiry.establishment} wrote this; {enquiry.clientName} {enquiry.email}
            {enquiry.checkin} {enquiry.checkout}</h1>
        )
    }
    </div>
)
}
