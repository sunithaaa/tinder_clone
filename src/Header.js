import React from 'react'
import "./Header.css"
import {Link ,useHistory} from "react-router-dom"
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import Logo from "../src/images/logo.jpg"
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos"

export default function Header({backButton}) {
    const history=useHistory();
    return (
        <div className="header">
        {backButton?(
            <IconButton onClick={()=>history.replace(backButton)}>
                <ArrowBackIosIcon fontSize="large" className="header__icon"/> 
            </IconButton>
        ):(
            <IconButton >
            <PersonIcon className="header__icon" fontSize="large"/></IconButton>
        )}
           
            <Link to = "/">
            <img 
            className="header__logo"
            src={Logo} alt="tinder logo"/></Link>
            <Link to="/chat">
            <IconButton>
            <ForumIcon className="header__icon" fontSize="large"/></IconButton></Link>
        </div>
    )
}
