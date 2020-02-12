import React from 'react'
import emailjs from "emailjs-com";
import {Contacts} from "../components/contacts";

export class ContactsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            _serviceID: 'default_service',
            _templateID: 'template_Tj0D2ed5',
            _userID: 'user_azwboHTiBTpaZ0siXrOBT',
            _userNameFieldValue: "",
            _companyNameFieldValue: "",
            _userEmailFieldValue: "",
            _sendResult: "",
        };
        this.sendEmail.bind(this);
        this.userEmailFieldHandler.bind(this);
        this.userNameFieldHandler.bind(this);
        this.companyNameFieldHandler.bind(this);
        this.generateDefaulttextForCommentField.bind(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        window.scrollTo(0,0)
    }

    generateDefaulttextForCommentField = () => {
        let material = new URLSearchParams(window.location.search).get("material");
        if (material !== null) return `Hallo, i want to talk about "${material}". Please call me!`;
        else return ''
    };

    sendEmail = (e) => {
        console.log(e.target);
        emailjs.sendForm(
            this.state._serviceID,
            this.state._templateID,
            e.target,
            this.state._userID
        ).then((result) => {
            console.log(result.text);
            this.setState({
                _sendResult: result.text,
            });
        }, (error) => {
            console.log(error.text);
            this.setState({
                _sendResult: error.text,
            });
        });
    };

    userNameFieldHandler = (value) => {
        this.setState({
            _userNameFieldValue: value,
        });
    };

    userEmailFieldHandler = (value) => {
        this.setState({
            _userEmailFieldValue: value,
        });
    };

    companyNameFieldHandler = (value) => {
        this.setState({
            _companyNameFieldValue: value,
        });
    };

    render() {
        return (
            <Contacts
                generateDefaulttextForCommentField={this.generateDefaulttextForCommentField}
                userNameFieldValue={this.state._userNameFieldValue}
                userNameFieldHandler={this.userNameFieldHandler}
                userEmailFieldValue={this.state._userEmailFieldValue}
                userEmailFieldHandler={this.userEmailFieldHandler}
                companyNameFieldValue={this.state._companyNameFieldValue}
                companyNameFieldHandler={this.companyNameFieldHandler}
                sendEmail={this.sendEmail}
            />
        )
    }

}
