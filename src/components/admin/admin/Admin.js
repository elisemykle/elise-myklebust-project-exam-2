import React from 'react';
import Hero from "../../Hero.js";
import MessageList from "../message/MessageList.js";
import EnquiryList from "../enquirylist/EnquiryList.js";
import AddEstablishment from "../addestablishment/AddEstablishment.js";


export default function Admin(props){
	/* Alt inn i return er "designet" som forteller hva som skal displaye på nettsiden */
	return(
		<div className="admin">
			<Hero title="Admin" text="" classes="hero hero--contact" showSearch={false}/>
			<AddEstablishment/>
			<EnquiryList/>
			<MessageList/>
		</div>
	)
}
