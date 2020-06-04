import React, { useState, useEffect } from 'react';

/* API call som henter informasjonen fra en url-kobling */
const API_URL = "http://elisemdesign.no/project-exam-2-master/get-enquiries.php";

// Enquirylist komponenten
export default function EnquiryList() {
    // States
    const [enquiries, setEnquiries] = useState([]);
    // Henter dataene fra API'et
    useEffect(() => {
        fetch(API_URL)
        .then(response => response.json())
        .then((json) => {
            setEnquiries(json);
        })
        /* Console.log lar deg se feilmeldinger i console om noe skulle gå galt*/
        .catch(() => {
            console.log("Noe gikk galt");
        })
    },[]);

    /* Alt inn i return er "designet" som forteller hva som skal displaye på nettsiden */
    return (
        <div className="enquirylist">
            <h1 className="enquiries__h1">Enquiries  from customers</h1>
            <div className="row enquirylist__list">
                {
                    enquiries.map((enquiry, index) =>
                    <div className="column enquirylist" key={index}>
                        <p className="enquirylist__establishment">{enquiry.establishment}</p>
                        <p className="enquirylist__clientname"><b className="enquirylist__boldtext">Client name: </b>{enquiry.clientName}</p>
                        <a href="mailto:{this.props.email}" className="enquirylist__email"><b className="enquirylist__boldtext">Email:</b> {enquiry.email}</a>
                        <p className="enquirylist__checkin"><b className="enquirylist__boldtext">Check-in: </b> {enquiry.checkin}</p>
                        <p className="enquirylist__checkin"><b className="enquirylist__boldtext">Check-out: </b> {enquiry.checkout}</p>
                </div>
                )
            }
        </div>
    </div>
)
}
