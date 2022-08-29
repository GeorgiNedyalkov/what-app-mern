import React from "react"
import "./Chat.css"
import { Avatar, IconButton } from "@mui/material"
import SearchOutlined from "@mui/icons-material/SearchOutlined"
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined"
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined"
import InsertEmoticon from "@mui/icons-material/InsertEmoticon"
import Mic from "@mui/icons-material/Mic"

function Chat() {
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
        <p className="chat__message">
          <span className="chat__name">Georgi</span>
          This is a message
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat__message chat__receiver">
          <span className="chat__name">Georgi</span>
          This is a received message
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat__message">
          <span className="chat__name">Georgi</span>
          This is a message
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
      </div>

      <div className="chat__footer">
        <InsertEmoticon />
        <form>
          <input
            // value={input}
            // onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message"
            type="text"
          />
          <button type="submit">Send message</button>
        </form>
        <Mic />
      </div>
    </div>
  )
}

export default Chat
