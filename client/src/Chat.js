import React, { useState } from "react"
import "./Chat.css"
import { Avatar, IconButton } from "@mui/material"
import SearchOutlined from "@mui/icons-material/SearchOutlined"
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined"
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined"
import InsertEmoticon from "@mui/icons-material/InsertEmoticon"
import Mic from "@mui/icons-material/Mic"
import axios from "./axios"

function Chat({ messages }) {
  const [input, setInput] = useState("")

  const sendMessage = async (e) => {
    e.preventDefault()

    await axios.post("/messages/new", {
      message: input,
      name: "FLu3ntino", // authentication can be passed later
      timestamp: "0:52, 30.08.2022",
      received: true,
    })

    setInput("")
  }

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />

        <div className="chat__headerInfo">
          <h3>Room Name</h3>
          <p>Last seen at...</p>
        </div>

        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFileOutlinedIcon />
          </IconButton>
          <IconButton>
            <MoreVertOutlinedIcon />
          </IconButton>
        </div>
      </div>

      {/* TODO: Extract the chat message as its own component */}
      <div className="chat__body">
        {messages.map((message) => (
          <p
            className={`chat__message ${message.received && "chat__receiver"}`}
          >
            <span className="chat__name">{message.name}</span>
            {message.message}
            <span className="chat__timestamp">{message.timestamp}</span>
          </p>
        ))}
      </div>

      <div className="chat__footer">
        <InsertEmoticon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message"
            type="text"
          />
          <button type="submit" onClick={sendMessage}>
            Send message
          </button>
        </form>
        <Mic />
      </div>
    </div>
  )
}

export default Chat
