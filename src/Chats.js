import React from "react";
import './Chats.css';
import Chat from "./Chat";

function Chats(){
    return (
        <div className="chats">
            <Chat name="Sayuri" 
            message="Hey sweetie!" 
            timestamp="40 seconds ago" 
            profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRopG1iL9JgDgKbLohG7D0Ij6--GoTzvk0cDA&usqp=CAU" />
            <Chat name="Mayumi"
            message="Good morning!"
            timestamp="12 seconds ago"
            profilePic="https://asianwiki.com/images/6/63/Mayumi_%28actress%29-P1.jpg"/>
            <Chat name="Miyuki"
            message="Hiii!"
            timestamp="25 seconds ago"
            profilePic="https://upload.wikimedia.org/wikipedia/en/thumb/8/8b/Sakai_Izumi.png/220px-Sakai_Izumi.png"/>
            <Chat name="Mayra"
            message="Hellooo!"
            timestamp="37 seconds ago"
            profilePic="https://i.pinimg.com/280x280_RS/a4/3b/ec/a43becdd63602d20c792deb6e1d78bb1.jpg"/>
        </div>
    );
}

export default Chats;