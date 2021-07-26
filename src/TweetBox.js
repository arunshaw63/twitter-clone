
import React, {useState} from 'react';
import './TweetBox.css';
import { Avatar, Button } from '@material-ui/core';
import db from "./firebase";

function Tweetbox() {
    const [tweetMessage, setTweetMessage ] = useState("");
    const [tweetImage, setTweetImage ] = useState("");

    const sendTweet = (e)=> {
        e.preventDefault();
        db.collection("posts").add({
            displayName: "Shaw Arun",
            username: "shawji",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar:
              "https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png",
          });
          setTweetMessage("");
          setTweetImage("");


    }
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox_input">
                    <Avatar src= "https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />
                <input onChange={(e)=> setTweetMessage(e.target.value)}
                    value={tweetMessage} 
                    type="text" 
                    placeholder="What's happening ?"
                />
                </div>
                <input 
                       onChange={(e)=> setTweetImage(e.target.value)}
                       value={tweetImage}
                       type="text"
                       className="tweetBox__imageInput"
                       placeholder="Optional:Enter image URL"
                       />
                <Button type="submit"  onClick={sendTweet} className="tweetBox_tweetButton">Tweet</Button>
            </form>            
        </div>
    )
}

export default Tweetbox
