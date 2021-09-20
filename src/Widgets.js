import React from 'react'
import "./Widgets.css";
import SearchIcon from '@mui/icons-material/Search';
import {TwitterTimelineEmbed,TwitterTweetEmbed} from "react-twitter-embed";
function Widgets() {
    return (
        <div className="widgets">  
            <div className="widgets_input">
                <SearchIcon className="widgets_searchIcon"></SearchIcon>
                <input placeholder="Search Twitter" type="text"></input>
            </div>
            <div className="widgets_widgetContainer">
                <h2>What's happening</h2>
                <TwitterTweetEmbed tweetId="1402320383932502021"></TwitterTweetEmbed>
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="reactjs"
                    options={{height:400}}
                ></TwitterTimelineEmbed>


            </div>

            
        </div>
    )
}

export default Widgets
