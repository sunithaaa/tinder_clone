import React from 'react'
import Chat from "./Chat"
export default function Chats() {
    return (
        <div className="chats">
            <Chat
                name="Mark"
                message="tinder app"
                timestamp="40 sec ago"
                profilePic="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2NzA3ODE3OTgwMzcyMjYw/jeff-bezos-andrew-harrer_bloomberg-via-getty-images.jpg"
                />
                <Chat
                name="jark"
                message="tinder app"
                timestamp="40 sec ago"
                profilePic="..."
                />
                <Chat
                name="steve"
                message="tinder app"
                timestamp="40 sec ago"
                profilePic="..."
                />
                <Chat
                name="Bezos"
                message="tinder app"
                timestamp="40 sec ago"
                profilePic="..."
                />
        </div>
    )
}
