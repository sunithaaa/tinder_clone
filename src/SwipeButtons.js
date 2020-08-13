import React from 'react'
import "./SwipeButtons.css"
import ReplayIcon from "@material-ui/icons/Replay"
import CloseIcon from "@material-ui/icons/Close"
import StartRateIcon from "@material-ui/icons/StarRate"
import FavoriteIcon from "@material-ui/icons/Favorite"
import FlashOnIcon from "@material-ui/icons/FlashOn"
import IconButton from "@material-ui/core/IconButton"

export default function SwipeButtons() {
    return (
      
        <div className="swipebuttons">
        
            <IconButton className="swipebuttons__repeat">
                <ReplayIcon fontSize="large"/>
            </IconButton>
            <IconButton className="swipebuttons__left">
                <CloseIcon fontSize="large"/>
            </IconButton>
            <IconButton className="swipebuttons__star">
                <StartRateIcon fontSize="large"/>
            </IconButton>
            <IconButton className="swipebuttons__right">
                <FavoriteIcon fontSize="large"/>
            </IconButton>
            <IconButton className="swipebuttons__lighting">
                <FlashOnIcon fontSize="large"/>
            </IconButton>
            
        </div>
    )
}
