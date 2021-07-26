import React from 'react';
import SearchIcon from "@material-ui/icons/Search";
import "./Widget.css";
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
  } from "react-twitter-embed";

function Widget() {
    return (
        <div className="widgets">
           <div className="widgets__input">
               <SearchIcon  className="widgets__searchIcon" />
               <input type="text" placeholder="Search Twitter" />
           </div>
           <div className="widgets__widgetContainer">
               <h2>Whats hapenning</h2>
     <TwitterTweetEmbed   tweetId={'933354946111705097'} />
     <TwitterTimelineEmbed
          sourceType="profile"
          screenName="aajtak"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://facebook.com/cleverprogrammer"}
          options={{ text: "#reactjs is awesome", via: "cleverqazi" }}
        />
           </div>
        </div>
    )
}

export default Widget
