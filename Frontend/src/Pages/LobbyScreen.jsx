import React from 'react'
import "../App.css"
import { useState, useCallback, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import {useSocket} from "../context/SocketContext"

const LobbyScreen =()=>{
    const [email, setEmail] = useState("");
    const [room, setRoom] = useState("");
    const name = localStorage.getItem("username");
    const spleet = name.split(" ");
    const fName = spleet[0];

    const socket = useSocket();
    // console.log(socket);

    const navigate = useNavigate();

    const handleSubmitForm = useCallback((e)=>{
        e.preventDefault();
        socket.emit("room:join", { email, room }); // Emit the room join event
        // console.log({email,room,})
    }, [email,room,socket] )

    const handleJoinRoom= useCallback((data)=>{
        const {email,room}= data
        navigate(`/room/${room}`);
        // console.log("jiooin",email,room);
    },[navigate])  

    useEffect(()=>{
        socket?.on("room:join", handleJoinRoom
        // data=>{console.log(`data fron backend ${data}`)}
        );
        return()=>{
            socket?.off("room:join", handleJoinRoom);
        }
    },[socket,handleJoinRoom]) 

        return(
            <div className='lobby' style={{display:"flex",flexDirection:"column"}}>
            <h2 style={{ letterSpacing: "1px" }}>Hello {fName}!</h2>
            <h3>Add Details & Create Room</h3>
                <button style={{margin:10,}} onClick={() => navigate("/Addcts")}>Back To Home Page</button>
                <form onSubmit={handleSubmitForm} className='input'>
                    {/* <label htmlFor="email">Email Id:</label> */}
                    <input 
                    placeholder='Enter Your Email Id :'
                    type="email" 
                    id="email" 
                    value={email} 
                    onChange={(e)=>setEmail(e.target.value)}/>
                    <br/>
                    {/* <label htmlFor="room">room no:</label> */}
                    <input 
                    placeholder='Enter Room No.'
                    type="text" 
                    id="room"
                    value={room} 
                    onChange={(e)=>setRoom(e.target.value)}
                    />
                    <br/>
                    <button>Enter Room</button>
                </form>
            </div>
        )
}

export default LobbyScreen;