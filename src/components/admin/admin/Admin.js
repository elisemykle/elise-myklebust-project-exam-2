import React, { useState, useEffect} from 'react';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Hero from "../../Hero.js";
import { useHistory } from 'react-router-dom';
import MessageList from "../message/MessageList.js";
import EnquiryList from "../enquirylist/EnquiryList.js";
import AddEstablishment from "../addestablishment/AddEstablishment.js";


export default function Admin(props){
	/* Alt inn i return er "designet" som forteller hva som skal displaye på nettsiden */
	return(
		<div className="admin">
			<Hero title="Admin" text="" classes="hero hero--contact" showSearch={false}/>
			<div className="addestablishment">
				<div className="establishment__list">
					<AddEstablishment/>
				</div>
			</div>
			<div className="messages">
				<div className="messages__list">
					<MessageList/>
				</div>
			</div>
			<div className="enquiries">
				<div className="enquiries__list">
					<EnquiryList/>
				</div>
			</div>
		</div>
	)
}
