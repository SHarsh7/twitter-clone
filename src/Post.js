import { Avatar } from "@mui/material";
import React from "react";
import "./Post.css";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import VerifiedIcon from "@mui/icons-material/Verified";
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';

function Post({ displayname,verified, text, avatar }) {
  return (
    <div className="post">
      <div className="post_avatar">
        <Avatar src={avatar}></Avatar>
      </div>
      <div className="post_body">
        <div className="post_header">
          <div className="post_headerText">
            <h3>
              {displayname}{" "}
              <span className="post_headerSpecial">
                {verified && <VerifiedIcon className="post_badge" fontSize="small"></VerifiedIcon>}             
              </span>
            </h3>
          </div>
          <div className="post_headerDescription">
            <p>{text}</p>
            
          </div>
        </div>
        <div className="post_footer">
        <ChatBubbleOutlineIcon fontSize="small"></ChatBubbleOutlineIcon>
        <RepeatIcon fontsize="small"></RepeatIcon>
        <FavoriteBorderIcon fontsize="small"></FavoriteBorderIcon>
        <PublishIcon fontsize="small"></PublishIcon>
      </div>
      </div>
      
    </div>
  );
}

export default Post;
