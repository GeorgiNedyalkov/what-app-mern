import React from "react"
import "./Sidebar.css"
import SidebarChat from "./SidebarChat"

// Icons
import ChatIcon from "@mui/icons-material/Chat"
import DonutLarge from "@mui/icons-material/DonutLarge"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"
import { IconButton, Avatar } from "@mui/material"

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src="https://avatars.githubusercontent.com/u/51360924?s=96&v=4" />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLarge />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlinedIcon />
          <input placeholder="Search or start new chat" type="text" />
        </div>
      </div>
      <div className="sidebar__chats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  )
}

export default Sidebar
